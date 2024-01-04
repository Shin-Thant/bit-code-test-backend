-- RenameIndex
ALTER TABLE `tbl_book` RENAME INDEX `book_uniq_idx` TO `tbl_book_book_uniq_idx_idx`;

-- RenameIndex
ALTER TABLE `tbl_book` RENAME INDEX `co_id` TO `tbl_book_co_id_idx`;

-- RenameIndex
ALTER TABLE `tbl_book` RENAME INDEX `publisher_id` TO `tbl_book_publisher_id_idx`;
