export interface Member {
  name: string;
  role: string;
  photo?: string;
}

export interface TeamSection {
  label: string;
  number: string;
  members: Member[];
}

export const team: TeamSection[] = [
  {
    label: 'Principal Supervisor',
    number: '01',
    members: [
      { name: 'Huỳnh Quyết Thắng', role: 'Associate Professor · Vice-Provost, Hanoi University of Science and Technology', photo: '/photos/quyetthanghuynh.jpg' },
    ],
  },
  {
    label: 'Co-Supervisor',
    number: '02',
    members: [
      { name: 'Lê Công Thành', role: 'Assistant Professor, Singapore University of Technology and Design', photo: '/photos/ThanhLeCong.webp' },
    ],
  },
  {
    label: 'Mentors',
    number: '03',
    members: [
      { name: 'Trần Đức Mạnh', role: 'PhD Student, University of Sydney', photo: '/photos/ducmanhtran.jpg' },
      { name: 'Nguyễn Hữu Hưng', role: 'PhD Student, Singapore Management University', photo: '/photos/huuhungnguyen.jpg' },
      { name: 'Nguyễn Đăng Dương', role: '(Incoming) PhD Student, Singapore Management University', photo: '/photos/Duong.jpeg' },
      { name: 'Lê Quốc Hưng', role: 'PhD Student, NC State University', photo: '/photos/quochungle.jpeg' },
    ],
  },
  {
    label: 'Graduate students',
    number: '04',
    members: [
      { name: 'Trương Thanh Hùng', role: 'Master Student' },
    ],
  },
  {
    label: 'Undergraduate students',
    number: '05',
    members: [
      { name: 'Trịnh Duy Phong', role: 'Undergraduate Student (Y4)' },
      { name: 'Âu Trung Phong', role: 'Undergraduate Student (Y4)' },
      { name: 'Trần Sỹ Minh Quân', role: 'Undergraduate Student (Y4)' },
      { name: 'Lăng Hồng Nguyệt Anh', role: 'Undergraduate Student (Y3)' },
      { name: 'Bùi Quang Phương', role: 'Undergraduate Student (Y3)' },
      { name: 'Nguyễn Anh Tuấn', role: 'Undergraduate Student (Y3)' },
      { name: 'Nguyễn Mạnh Quyền', role: 'Undergraduate Student (Y3)' },
      { name: 'Nguyễn Hữu Kiên', role: 'Undergraduate Student (Y3)' },
      { name: 'Phạm Trung Kiên', role: 'Undergraduate Student (Y2)' },
    ],
  },
  {
    label: 'Alumni',
    number: '06',
    members: [
      { name: 'Lê Công Thành', role: 'PhD Student, University of Melbourne' },
      { name: 'Lương Đức Minh', role: 'BrSE, Sun Asterisk (Japan)' },
      { name: 'Bùi Ngọc Tân', role: 'PhD Student, Singapore Management University' },
      { name: 'Nguyễn Hữu Hưng', role: 'PhD Student, Singapore Management University' },
      { name: 'Lê Quốc Hưng', role: 'PhD Student, NC State University' },
      { name: 'Đặng Yến Trang', role: 'PhD Student, University of Sydney' },
      { name: 'Trần Đức Mạnh', role: 'PhD Student, University of Sydney' },
      { name: 'Nguyễn Phúc Thành', role: 'Research Engineer, Singapore Management University' },
      { name: 'Đặng Hoàng Long', role: 'Software Engineer, Viettel Solutions' },
      { name: 'Hồ Trung Công', role: 'Software Engineer, EVN-ICT' },
      { name: 'Trần Dương Chính', role: 'PhD Student, Nanyang Technological University' },
    ],
  },
];
