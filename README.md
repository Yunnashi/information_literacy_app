# information_literacy_app


### Docker 関連
```bash
# コンテナ起動
docker compose build
docker compose up -d

#コンテナ停止
docker compose down

# phpコンテナログイン
docker compose exec api bash

# DBログイン
 docker exec -it info-db mysql -uroot -proot
```

## 環境構築メモ

### テーブル作成

```bash
docker compose exec api bash
php artisan migrate
```

### DBデータ投入方法
information_literacy_app ディレクトリで、下記コマンドを実行

``` bash
docker cp docker/db/insert.sql info-db:/tmp/
docker exec -it info-db mysql -uroot -proot info-db -e "source /tmp/insert.sql"
```