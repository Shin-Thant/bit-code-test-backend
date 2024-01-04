-- CreateTable
CREATE TABLE `content_owner` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `publisher` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_book` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `co_id` INTEGER NOT NULL,
    `publisher_id` INTEGER NOT NULL,
    `book_uniq_idx` VARCHAR(255) NOT NULL,
    `bookname` VARCHAR(255) NOT NULL,
    `cover_photo` VARCHAR(255) NOT NULL,
    `price` INTEGER NOT NULL,
    `created_timetick` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `book_uniq_idx`(`book_uniq_idx`),
    INDEX `co_id`(`co_id`),
    INDEX `publisher_id`(`publisher_id`),
    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_book` ADD CONSTRAINT `tbl_book_publisher_id_fkey` FOREIGN KEY (`publisher_id`) REFERENCES `publisher`(`idx`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_book` ADD CONSTRAINT `tbl_book_co_id_fkey` FOREIGN KEY (`co_id`) REFERENCES `content_owner`(`idx`) ON DELETE CASCADE ON UPDATE CASCADE;
