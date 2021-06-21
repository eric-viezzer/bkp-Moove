#install.packages(c("wordcloud", "RColorBrewer","SnowballC", "wordcloud2", "tm", "pdftools", "stringr"))

library(tm)
library(pdftools)
library(wordcloud)
library(SnowballC)
library(RColorBrewer)
library(wordcloud2)
library(stringr)
file_location <- "C:/Users/guipa/Downloads/comentarios.pdf"
txt <- pdf_text(file_location)
docs <- Corpus(VectorSource(txt))
#transformar texto tudo em minusculo
docs <- tm_map(docs,tolower)
#remover pontuação texto
docs <- tm_map(docs, removePunctuation)
#remover os stopwords
docs <- tm_map(docs, removeWords, stopwords("pt"))
#remover números do texto
docs <- tm_map(docs, removeNumbers)
#remover espaços em branco
docs <- tm_map(docs, stripWhitespace)
docs <- tm_map(docs, stemDocument)
#concatenar palavras parecidas
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(banco|banco|assento|assentos|cadeira|cadeiras)\\b", replacement = "banco")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(estação|pontos|ponto)\\b", replacement = "ponto")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(trajeto|linha|linhas)\\b", replacement = "linha")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(veiculo|ônibus|onibus)\\b", replacement = "onibus")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(valor|passagem|dinheiro|troco)\\b", replacement = "preço")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(assalto|roubo|roubaram|assaltado|roubado|assaltaram|assaltada|roubado|assaltou)\\b", replacement = "onibus")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(ar|condicionado|ar-condicionado)\\b", replacement = "arcondicionado")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(mal|mal-educado|educado|maleducado)\\b", replacement = "maleducado")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(quebrado|furado)\\b", replacement = "danificado")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(atrasado|demorado|demora|tempo)\\b", replacement = "atrasado")
docs <- tm_map(docs, content_transformer(gsub), pattern = "\\b(segurança|segura|perigo|perigosa)\\b", replacement = "segurança")
#remover palavras desnecessarias
docs <- tm_map(docs, removeWords,c("hrs", "horas", "pouco", "muito", "qunatidad", "porque", "porqu", "pq","todo","vai", "ver", "sempr", "algun", "alguns", "pegar", "proximo", "esqueceu", "sinal", "próximo", "doi", "pé", "mão", "queria"))

#criação do dataset
dtm <- TermDocumentMatrix(docs)
matrix <- as.matrix(dtm)
words <- sort(rowSums(matrix), decreasing = TRUE)
df <- data.frame(word = names(words),freq=words)
View(df)

#criação da wordcloud('Nuvem de Palavras')
wordcloud2(data = df, size = 0.8, color = 'random-light', backgroundColor = 'black', minRotation = -pi/6, maxRotation = -pi/6, rotateRatio = 0)
