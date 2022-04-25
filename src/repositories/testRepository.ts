import { client } from "../database.js";

// export async function findAll() {
//   const tests = await client.test.findMany({
//     orderBy:[{
//       teacherDiscipline:{
//         discipline:{
//           name: 'asc'
//         }
//       }
//     }],
//     include:{
//       teacherDiscipline: {
//         include:{
//           teacher:{
//             select:{
//               name:true
//             }
//           },
//           discipline:{
//             select:{
//               name: true,
//               term:{
//                 select:{
//                   number:true
//                 }
//               }
//             }
//           }
//         }
//       },
//       category:{
//         select:{
//           name:true
//         }
//       }
//     }
//   }

//   )

//   return tests
// }


export async function findAllByDiscipline() {
  const tests = await client.term.findMany({
    include:{
      Discipline:{
        include:{
          teachersDisciplines:{
            include:{
              Test:true
            }
          }
        }
      }
    }
  })

  return tests
}


export async function findAll() {
  const tests = await client.test.findMany({})

  return tests
}

export async function getTerms() {
  const terms = await client.term.findMany({
    include:{
      Discipline:{
        select:{
          id:true,
          name:true
        }
      }
    }
  })
  return terms
}

export async function getTestsByDisciplines(disciplineId: number) {
  const tests = await client.category.findMany({
    include:{
      Test:{
        where:{
          teacherDiscipline:{
            disciplineId
          }
        },
        select:{
          id:true,
          name:true,
          pdfUrl:true,
          teacherDiscipline:{
            select:{
              teacher:{
                select:{
                  name:true
                }
              }
            }
          }
        }
      }
    }
  })

  return tests
}

