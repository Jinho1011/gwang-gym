import S3 from 'aws-sdk/clients/s3';

const s3 = new S3({ accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY });

export const getFile = async (filename, bucketName) => {
  const s3Output = s3.getObject({
    Key: filename,
    Bucket: bucketName,
  });

  const jsonString = (await s3Output.promise()).Body.toString('utf-8');
  const json = JSON.parse(jsonString ?? '');
  return json;
};
