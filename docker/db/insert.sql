-- newsテーブルにデータを追加
INSERT INTO news (title, published_at, created_at, updated_at) VALUES
('大阪万博の開催について', '2025-04-13 00:00:00', NOW(), NOW()),
('トランプ大統領の関税政策について', '2025-04-20 00:00:00', NOW(), NOW()),
('同性婚について', '2025-03-20 00:00:00', NOW(), NOW());

-- commentsテーブルにデータを追加
INSERT INTO comments (news_id, stance, content, created_at, updated_at) VALUES
(1, 'positive', '賛成１', NOW(), NOW()),
(1, 'positive', '賛成２', NOW(), NOW()),
(1, 'negative', '反対１', NOW(), NOW()),
(2, 'positive', '賛成です！1', NOW(), NOW()),
(2, 'neutral', '中立意見です。１', NOW(), NOW()),
(2, 'neutral', '中立意見です。２', NOW(), NOW()),
(3, 'negative', '反対です！1', NOW(), NOW()),
(3, 'neutral', '中立１', NOW(), NOW()),
(3, 'neutral', '中立２', NOW(), NOW());