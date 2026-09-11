const { Client, Databases, Storage, ID } = Appwrite;

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6aa43fa3001b545293b2'); // Project ID

const databases = new Databases(client);
const storage = new Storage(client);

const DB_ID = '6aa4407a00096e003445';          // ID Basis Data
const COLLECTION_ID = '6aa440b70037f5b74926';  // ID Tabel tugas pengajuan
const BUCKET_ID = '6aa4424f003b1895f906';      // ID Storage Bucket Pengumpulan Tugas