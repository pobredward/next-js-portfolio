import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩
        </h1>
        <p className="mb-8 leading-relaxed">
          이상이 굳세게 사라지지 이상을 같으며, 뭇 두손을 무엇을 것이다. 곧 하는
          열락의 따뜻한 피부가 예가 청춘의 새가 만천하의 말이다. 밥을 우리
          힘차게 군영과 실로 봄바람이다. 석가는 이 있는 풀이 생의 넣는 뿐이다.
          두손을 품었기 끝에 봄바람이다. 현저하게 설산에서 소금이라 안고, 때까지
          곳이 청춘 바로 있을 아름다우냐? 구하지 너의 가치를 우리 사막이다. 가는
          찬미를 목숨이 청춘의 창공에 피가 대중을 때문이다. 피어나기 눈에 커다란
          반짝이는 위하여 것이다. 충분히 그와 돋고, 일월과 투명하되 뿐이다. 이상
          긴지라 피는 열매를 사막이다. 같이, 굳세게 충분히 능히 그들에게
          사막이다. 찬미를 구하지 따뜻한 내는 얼음과 있는 힘있다. 할지라도 꽃이
          남는 만천하의 이상의 행복스럽고 교향악이다. 위하여 설산에서 뜨고,
          무엇을 있다. 생생하며, 그림자는 그들의 운다. 그러므로 사라지지 위하여,
          아니더면, 청춘의 것은 트고, 가는 듣는다. 산야에 옷을 석가는 피어나기
          인생을 같이, 있는 기쁘며, 따뜻한 그리하였는가? 별과 청춘의 그들은
          그것을 보이는 그들의 이상의 것이다. 그것을 아니한 인간의 우리의 온갖
          실현에 있는 쓸쓸하랴?
        </p>
        <div className="flex justify-center">
            <Link href="./projects" legacyBehavior>
                <a className="btn-project">
                    프로젝트 보러 가기
                </a>
            
            </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation/>
      </div>
    </>
  );
}
