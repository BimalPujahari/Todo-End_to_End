const z=require('zod');

// const data1=z.object({
// title:z.string(),
// description:z.string()
// })

const data1=z.string();
// const data2=z.string();
const data2=z.object({
id:z.string()
})
// const ans=data.safeParse("i am a boy");
// console.log(ans)

module.exports={
          data1:data1,data2:data2
}