# Manual

## 目次
- [Manual](#manual)
  - [目次](#目次)
  - [DBの利用](#dbの利用)
    - [DBとの接続](#dbとの接続)
    - [テーブルの作成](#テーブルの作成)
    - [DBの操作](#dbの操作)
      - [データの取得](#データの取得)



## DBの利用
今回のプロジェクトでは、RDBとしてSupabaaseを利用しています。

Supabaaseのドキュメントは[こちら](https://supabase.io/docs/guides/database)を参照してください。

### DBとの接続
DBとの接続は、.envファイルに環境変数を記述し、必要な場合は.envから値を取得することで行います。

例：
```bash
# .env
DATABASE_URL="postgresql://postgres:[YOURPASSWORD]@db.[PROJECTURL]:5432/postgres"
```

### テーブルの作成
テーブルは、`/prisma/schema.prisma`に記述し、マイグレーションすることで作成できます。

例：
```prisma
// /prisma/schema.prisma
model Users {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
}
```

@idは、主キーを表します。@default(autoincrement())は、自動で値を設定することを表します。

@uniqueは、ユニークキーを表します。この場合、emailはユニークキーとなります。

@default(now())は、デフォルト値を設定することを表します。この場合、created_atには、データが作成された日時が設定されます。

@updatedAtは、データが更新された日時を設定することを表します。

モデルを定義したら、マイグレーションを行います。

```bash
$ npx prisma migrate dev --name init
```
devは既にあるDBのデータを削除してしまいます。既にデータがある場合は、`dev`ではなく`deploy`を使用してください。

コマンドが正常に終了すると、`/prisma/migrations`にマイグレーションファイルが作成されます。また、Supabaseの管理画面からもテーブルが作成されていることが確認できます。

### DBの操作
DBの操作は、Prismaを利用して行います。

DBの操作は、`/src/pages/api/`配下に適切なファイルを作成し、Prismaを利用して行います。

#### データの取得
データの取得の例を以下に示します。

全データの取得
```ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.users.findMany();
  res.status(200).json(users);
};
```

このように、prismaClientのインスタンスを作成し、prisma.[テーブル名].findMany()で、テーブルの全データを取得できます。

これは、SQLでの`SELECT * FROM users;`に相当します。

特定のデータの取得
```ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.users.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
    },
    where: {
      id: Number(2),
    },
  });
  res.status(200).json(user);
};
```

このようにselectで取得するカラムを指定し、whereで取得するデータを指定することで、特定のデータを取得できます。

これは、SQLでの`SELECT id, name, email FROM users WHERE id = 2;`に相当します。

データの作成
```ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.users.create({
    data: {
      name: "test",
      email: "user@sample.com",
      password: "password",
    },
  });
  res.status(200).json(user);
};
```

データの作成は、createメソッドを利用して作成することが出来ます。

これは、SQLでの`INSERT INTO users (name, email, password) VALUES　("test", "user@sample.com", "password");`に相当します。

usersでは、idやcreated_at, updated_atが定義されていますが、これらは自動で設定されます。

データの更新
```ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.users.update({
    data: {
      name: "test2",
      email: "user2@sample.com",
    },
    where: {
      id: Number(2),
    },
  });
  res.status(200).json(user);
};
```

データの更新は、updateメソッドを利用して行います。

今回の例では、idが2のデータのnameとemailを更新しています。

これは、SQLでの`UPDATE users SET name = "test2", email = "user2@sample.com" WHERE id = 2;`に相当します。

データの削除
```ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.users.delete({
    where: {
      id: Number(2),
    },
  });
  res.status(200).json(user);
};
```

データの削除は、deleteメソッドを利用して行います。

今回の例では、idが2のデータを削除しています。

これは、SQLでの`DELETE FROM users WHERE id = 2;`に相当します。

