import React from 'react'
import './index.css'

function FindCarComponent() {
  return (
    <>
   
    <div className="container form">
    <div className="line-boxes">
        <form>
            <div className="row boxes">
                <div className="col">
                    <label for="inputState" class="form-label">State</label>
                    <input type="text" class="form-control" placeholder="First name" />
                </div>
                <div className="col">
                <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col">
                <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col">
                <label for="inputState" class="form-label">State</label>
                <div className="col-last">
                <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    <button type="button" class="btn btn-success">Success</button>
                </div>
                </div>
            </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default FindCarComponent