import Layout from '@/components/layout'
import { Space, Table, Tag } from 'antd';
import Image from 'next/image'


const columns = [
    {
      title: 'Name of Award',
      dataIndex: 'award',
      key: 'award',
    //   render: (text) => <a>{text}</a>,
    },
    {
      title: 'Awarding Agency',
      dataIndex: 'agency',
      key: 'agency',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
  ];
  const data = [
    {
      key: '1',
      award: 'Start-up Research Grant (SRG)',
      agency: 'SERB',
      year: 2022,
    },
    {
        key: '2',
        award: 'Ben Barres Spotlight Award',
        agency: 'eLife, U.K.',
        year: 2021,
      },
      {
        key: '3',
        award: 'Nominated for a New Vision Investigator Award at the upcoming Charleston Conference on Alzheimer’s Disease (CCAD), 2021',
        agency: <> New Vision Research, USA <br></br> <br></br>Could not participate in final round in order to return to India.</>,
        year: 2020,
      },
      {
        key: '4',
        award: 'Senior Research Fellowship',
        agency: 'CSIR, India',
        year: 2010,
      },
      {
        key: '5',
        award: 'Junior Research Fellowship',
        agency: 'CSIR, India',
        year: 2008,
      },
      {
        key: '6',
        award: 'Invited for the Shyama Prasad Mukherjee Scholarship Test 2008',
        agency: 'CSIR, India',
        year: 2008,
      },
      {
        key: '7',
        award: 'Summer Research fellowship',
        agency: 'Indian Academy of Sciences (IAS), India',
        year: 2007,
      },
      
  ];
  
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
    // width: "50vw",
    // height: "50vh",
    objectFit: 'cover'
  }
  

export default function Personal () {
    // const table = useRef(null);
    // table.pagination=false;
    return (
        <>
            <Layout>
                <div id="personal">
                    {/* <h2>Research</h2>
                    <p>
                    Our research focuses on- 
                    </p>
                    <ol>
                        <li>Elucidating pathophysiological mechanisms of neurological disorders focusing on ion channels.</li>
                        <li>Creating novel brain models using human induced pluripotent stem cells (hiPSCs) from patients to study neurological disorders.</li>
                        <li>Translating novel mechanisms to develop therapy against neurological diseases. </li>
                    </ol> */}

                    <div id="personal_body">
                        <div id="personalImageCentering">
                            <div id="personalImageDiv">
                            <Image
                                src="image3.jpg"
                                alt="Personal Image"
                                id="personalImage"
                                // width="100"
                                // height="100"
                                style={imageStyle}
                                // className={styles.personalImage}
                                fill
                            />
                            </div>
                        </div>

                        <h2>Professional Recognition & Awards</h2>
                        <br></br>
                        <Table pagination={false} columns={columns} dataSource={data} />

                    </div>
                    
                </div>
            </Layout>
        </>
    )
}