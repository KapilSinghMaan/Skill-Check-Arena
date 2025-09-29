import React from 'react'

const CreateQuiz = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row m-5 ">
          <h1 className='text-center'>Create Quiz</h1>
          <form>
            <div className="my-2">
              <label htmlFor="quiz-topic" className='mb-2 fs-4'>Quiz Topic</label>
              <input type="text" className='form-control' name="quiz-topic" id="quiz-topic" placeholder='Enter topic of your quiz...' required />
            </div>
            <div className="my-2">
              <label htmlFor="question" className='mb-2 fs-4'>Enter Question</label>
              <input type='text' className='form-control' name="question" id="question" placeholder='Enter question...' required />
            </div>
            <div className="my-4 shadow p-4 rounded border">
              <h2 className='text-center fw-bold '>Options</h2>
              <div className="row m-0">
                <div className="col-sm-6 my-2">
                  <label htmlFor="option1" className='mb-2 fs-4'>Option 1</label>
                  <input type="text" className='form-control' name="option1" id="option1" placeholder='Enter option 1...' required />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="option2" className='mb-2 fs-4'>Option 2</label>
                  <input type="text" className='form-control' name="option2" id="option2" placeholder='Enter option 2...' required />
                </div>
              </div>
              <div className="row m-0">
                <div className="col-sm-6 my-2">
                  <label htmlFor="option3" className='mb-2 fs-4'>Option 3</label>
                  <input type="text" className='form-control' name="option3" id="option3" placeholder='Enter option 3...' required />
                </div>
                <div className="col-sm-6 my-2">
                  <label htmlFor="option4" className='mb-2 fs-4'>Option 4</label>
                  <input type="text" className='form-control' name="option4" id="option4" placeholder='Enter option 4...' required />
                </div>
              </div>
            </div>
            <div className="my-2 fs-5">
              <label htmlFor="answer" className='mb-2 fs-4'>Correct Answer : </label>
              <input type='radio' name='correct'className='ms-3'/> Option 1
              <input type='radio' name='correct'className='ms-3'/> Option 2
              <input type='radio' name='correct'className='ms-3'/> Option 3
              <input type='radio' name='correct'className='ms-3'/> Option 4
            </div>
            <div className="my-2">
              <label htmlFor="marks" className='mb-2 fs-4'>Marks</label>
              <input type="number" className='form-control' name="marks" id="marks" placeholder='Enter marks...' required />
            </div>
            <div className="mt-5 mx-auto text-center">
              <input type="submit" value="Create Quiz" className='btn btn-outline-dark px-4 py-2 fs-4' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateQuiz