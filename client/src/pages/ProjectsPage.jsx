import React, { useState , useEffect} from 'react'
import Project from '../components/Project'
import { json, useParams } from 'react-router-dom';


export default function ProjectsPage() {
    const [jsonData, setJsonData] = useState(null);
    const [project, setProject] = useState(null);
   
    const { projectId } = useParams();
    // renders the first project

    // renders data from json db
    useEffect(() => {
    
      const fetchData = async () => {
        
       
        try {
          const response = await fetch('/db/data.json'); // Fetch the JSON file
          const data = await response.json();
          setJsonData(data)
          // if this is the first time on projects page, set project to the first project in projects array  
          if(!projectId){
            const selectedProject = data.find(proj => proj.id === 1);
            setProject(selectedProject)
            return
          }
          // selects the project by request params
        const selectedProject = data.find(proj => proj.id === parseInt(projectId));
          setProject(selectedProject);
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      };
  
      fetchData();
    }, []);

   
    return (
        <>
        {project &&
        // project component
            <Project
            id={projectId ||project.id}
            title={project.title}
            tech={project.tech}
            desc={project.desc}
            img={project.img}
            liveSite={project.liveSite}
            github={project.github}
            data= {jsonData}
            />
        
        }
            
        
        </>
    )
}