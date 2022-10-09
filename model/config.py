import transformers

DEVICE = "cpu"#cpu or gpu
MAX_LEN = 64
TRAIN_BATCH_SIZE = 8
VALID_BATCH_SIZE = 4
EPOCHS = 1
BERT_PATH = "bert-base-uncased"
MODEL_PATH = "model.bin"
TRAINING_FILE = "ds.csv"
TOKENIZER = transformers.BertTokenizer.from_pretrained(BERT_PATH, do_lower_case=True)
