import React from 'react';
import { ProjectsDetail } from "./ProjectsDetail"
import useWebAnimations from "@wellyshen/use-web-animations";

export function Projects() {  
    const { ref } = useWebAnimations({
      keyframes: {
        transform: "translateX(100%) ", 
  
      },
      timing: {
        duration: 2000, 
        iterations: 1, 
        direction: "alternate-reverse",
        easing: "ease-in", 
      },  
    });
   
  return (
    < div ref={ref}>
      <div className="my-5">
        <h1 className="text-center">PIAIC Bootcamp2020 Projects</h1>
      </div>
      <div   className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div  className='row gy-15'>
              {
                ProjectsDetail.map((project, id) => {
                  return (
                    <div  key={id} className="col-md-6 col-12 mx-auto my-5">
                      <div className="card" >
                        <img className="card-img-top" src={project.imgsrc} alt={project.title} />
                        <div className="card-body">
                          <h5 className="card-title">{project.projectId}</h5>  
                          <h5 className="card-title">{project.title}</h5>                      
                                  
                          <a href={project.projectlink} className="btn btn-primary float-left">Visit Website</a>
                          <a href={project.gitlink} className="btn btn-info float-right">View Gihub Repo</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}