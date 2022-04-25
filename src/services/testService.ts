import * as testRepository from "../repositories/testRepository.js"


export async function getAll() {
  const tests = testRepository.findAll()

  return tests
}

export async function getByDiscipline(){
  const terms = await getTermsAndDisciplines()
//   const response = []
  

//   terms.forEach(term => {
//     const provas = []  
//     term.Discipline.forEach(async disc =>{
//       const categories = await testRepository.getTestsByDisciplines(disc.id)
//       let data = {discipline: disc.name, categories}
//       provas.push(data)
//     })
//     console.log(provas)

//   const final = {
//     termId: term.id,
//     termNumber: term.number,
//     termTests: provas
//   }
//   response.push(final)  })

//   return response
// }

const response = [];
	

	for (const term of terms) {
		let tests = [];
		for (const discipline of term.Discipline) {
			const categories = await testRepository.getTestsByDisciplines(discipline.id)
			tests.push({discipline: discipline.name, categories })
		}

		const final = {
			termId: term.id,
			termNumber: term.number,
			tests,
		}

		response.push(final)
	}

	return response;
}


export async function getByTeacher(){
	const teachers = await testRepository.getTeacher()
	const response = []

	for(let teacher of teachers){
		const categories = await testRepository.getTestsByCategories(teacher.id)

		const final = {
			id: teacher.id,
			name: teacher.name,
			categories
		}
		response.push(final)
	}

	return response
}



async function getTermsAndDisciplines() {
  const terms = await testRepository.getTerms()

  return terms
}