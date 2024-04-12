import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';
import StyledLink from '../StyledLink';

const TitleBlock = styled.div`
    h1 {
        font-size: 4rem;
        color: #f5df4d;
    }
`;

const PartBlock = styled.div`
    margin: 5rem 0;
    font-size: 1.5rem;
    line-height: 1.5;
    position: relative;

    @media (max-width: 768px) {
        font-size: 1.75rem;
        line-height: 1.5;
    }

    h2 {
        text-decoration: underline 10px;
        color: #f5df4d;
        font-size: 2rem;

        @media (max-width: 768px) {
            font-size: 2.5rem;
        }
    }
    h3 {
        font-size: 2rem;
        color: #f5df4d;
        @media (max-width: 768px) {
            font-size: 2.2rem;
        }
    }
    div {
        margin-top: 4rem;
    }
`;
const Contents = styled.li`
    font-size: 1.5rem;
    line-height: 1.5;
    @media (max-width: 768px) {
        font-size: 1.75rem;
        line-height: 1.5;
    }
`;
const MailBlock = styled.span`
    color: #4cc5f4;
`;
const Target = styled.div`
    position: absolute;
    left: 0px;
    top: -160px;
`;
const ShorctcutBlock = styled.div`
    margin: 0 2rem;
    font-size: 2rem;
    line-height: 1.6;
    h3 {
        color: #f5df4d;
        margin: 0.4rem 0;
    }
`;

const Shortcut = () => {
    return (
        <ShorctcutBlock>
            <h2>목차</h2>
            <ul>
                <Contents>
                    <StyledLink url="#purpose">의도와 목적</StyledLink>
                </Contents>
                <Contents>
                    <StyledLink url="#community">커뮤니티</StyledLink>
                </Contents>
                <Contents>
                    <StyledLink url="#communication">의사 소통</StyledLink>
                </Contents>
                <Contents>
                    <StyledLink url="#privacy">프라이버시</StyledLink>
                </Contents>
                <Contents>
                    <StyledLink url="#profit">영리 행위</StyledLink>
                </Contents>
                <Contents>
                    <StyledLink url="#public-manners">공중 도덕</StyledLink>
                </Contents>
                <Contents>
                    <StyledLink url="#reporting">신고하기</StyledLink>
                </Contents>
                <Contents>
                    <StyledLink url="#requests">당부의 말</StyledLink>
                </Contents>
                <Contents>
                    <StyledLink url="#contribution">기여하기</StyledLink>
                </Contents>
            </ul>
        </ShorctcutBlock>
    );
};

const IntentPart = () => {
    return (
        <PartBlock>
            <Target id="purpose" />
            <h2>의도와 목적</h2>
            <div>
                <h3>파이콘 한국은 모든 참가자를 포용합니다</h3>
                <p>
                    파이콘 한국 행동 강령(이하 행동 강령)은 누구도 배제되지 않는 파이썬 커뮤니티를 위해 구성원들이
                    지켜야 하는 최소한의 약속입니다.
                </p>
                <p>파이콘 한국은:</p>
                <ul>
                    <li>누구나 편안하게 참여할 수 있는 행사를 지향합니다.</li>
                    <li>서로 다름을 인정하고 존중하는 분위기를 지향합니다.</li>
                    <li>
                        성별, 성적 지향, 성 정체성, 국적, 인종, 지역, 종교, 나이, 사회적 신분, 학력, 지식 수준, 외모,
                        장애, 질병, 음식 선호 등과 관계 없이 모든 참가자가 동등한 컨퍼런스를 지향합니다.
                    </li>
                    <li>서로 환영하는 분위기를 독려합니다.</li>
                </ul>
            </div>
            <div>
                <h3>모든 참가자를 포용하는 게 왜 중요한가요?</h3>
                <p>
                    파이콘 한국은 다양성을 존중하는 태도가 사회와 커뮤니티를 더 풍요롭게 만드는 원천이라고 믿습니다.
                    어려운 문제에 대한 해결책을 찾고, 커뮤니티가 계속 성장하여 세상에 긍정적인 변화를 불러오기 위해서는
                    다양한 경험과 관점이 필요합니다. 그리고 다양한 경험과 관점은 다양한 사람들을 모두 존중하고 포용하는
                    데에서부터 비롯됩니다.
                </p>
            </div>
            <div>
                <h3>파이콘 한국은 차별과 괴롭힘을 용인하지 않습니다</h3>
                <p>행동 강령에 따라 파이콘 한국 준비위원회는:</p>
                <ul>
                    <li>
                        다른 참가자의 안전이 침해되거나 존중받지 못하는 상황이 발생했을 때 이를 중재 또는 제재할 수
                        있습니다.
                    </li>
                    <li>
                        필요한 경우 행동 강령을 위반한 참가자를 행사 공간(행사장, 공식 SNS, 행사 슬랙 등)에서 추방할 수
                        있습니다. 이 경우 참가비는 환불되지 않습니다.
                    </li>
                    <li>필요 또는 요청에 따라 사법/의료 기관에 신고할 수 있습니다.</li>
                </ul>
            </div>
            <div>
                <h3>행동 강령은 행사와 관련된 모든 상황에서 적용됩니다</h3>
                <p>
                    행동 강령은 파이썬 사용자 그룹이 진행하는 행사와 행사에 수반하는 과정 그리고 그 과정에 참여하는 모든
                    참가자에게 적용됩니다.
                </p>
                <ul>
                    <li>
                        참가자(발표자, 협력 단체, 스폰서, 자원봉사자, 준비위원회 등을 포함한 모든 사람)에게 적용됩니다.
                    </li>
                    <li>행사일을 포함하여 준비위원회에게 문의하는 모든 창구에 적용됩니다.</li>
                    <li>
                        발표 컨텐츠, 행사장, 웹사이트, 책자, 메일, 소셜 네트워크, 회의, 코드 저장소 등 모든 장소 및
                        과정과 산출물에 적용됩니다.
                    </li>
                </ul>
            </div>
            <div>
                <h3>주의 깊게 읽어주세요</h3>
                <p>
                    해서는 안 되는 일들의 전체 목록이 모두 여기에 담겨있지는 않습니다. 그보다는 이 행동 강령에 담긴
                    내용의 의도가 무엇인지 깊이 파악하고 서로에게 좀 더 잘 대할 수 있도록 해주는 가이드로 삼는 것이
                    중요합니다. 이 행동 강령을 문자 그대로 따르기보다 그 안에 담긴 의도를 파악하시고 행동해주실 것을
                    부탁드립니다.
                </p>
            </div>
        </PartBlock>
    );
};

const CommunityPart = () => {
    return (
        <PartBlock>
            <Target id="community" />
            <h2>커뮤니티</h2>
            <div>
                <h3>환영하는 분위기를 만들어주세요</h3>
                <p>
                    모든 참가자는 그들의 배경과 상관없이 환영받고 있다고 느껴야 합니다. 환영받지 못하거나 소외된다고
                    느끼는 사람은 커뮤니티 참여를 주저하게 됩니다. 환영하는 분위기를 조성해 파이썬 커뮤니티가 성장할 수
                    있도록 도와주세요.
                </p>
                <ul>
                    <li>초심자 혹은 행사에 처음 온 분들에게 친절하고 따뜻하게 대해주세요.</li>
                    <li>용기를 내주세요.</li>
                    <ul>
                        <li>
                            듣거나 지켜보는 게 더 편안하다면 그대로도 괜찮습니다. 만약 대화에 참여하고 싶을 때 망설임이
                            생긴다면 옆에서 활발하게 대화하고 있는 사람들도 오늘 처음 만났을 수 있다는 걸 생각해주세요.
                        </li>
                    </ul>
                    <li>반응해주세요.</li>
                    <ul>
                        <li>당신에게 한 마디를 건네기 위해 상대방은 용기를 냈을지도 모릅니다.</li>
                        <li>질문이나 도움을 구하는 요청에 친절하게 답해주세요.</li>
                        <li>답변에는 감사를 표현해주세요.</li>
                    </ul>
                </ul>
            </div>
            <div>
                <h3>안전한 파이콘 한국을 만들어주세요</h3>
                <p>
                    언제나 스스로의 말과 행동에 책임감을 가져주세요. 파이콘 한국은 다양한 사람들이 함께하는 행사입니다.
                    모든 사람들이 안전하고 믿을 수 있는 커뮤니티라고 느낄 수 있도록, 다른 사람을 위협하거나 위험하게
                    만드는 언행을 해서는 안 됩니다.
                </p>
                <ul>
                    <li>타인과 불필요한 신체 접촉을 하지 않도록 주의해주세요.</li>
                    <ul>
                        <li>동의 없이 손을 잡거나 어깨동무하는 행위</li>
                    </ul>
                    <li>대화에 욕설/비속어/은어를 포함하지 마세요.</li>
                    <ul>
                        <li>가까운 지인과 대화이더라도 주변 사람에게 불편함을 주거나 위협이 될 수 있습니다.</li>
                    </ul>
                    <li>화를 내거나 과격한 몸짓, 언성을 높이는 행위 등으로 상대방을 위협하지 마세요.</li>
                    <li>
                        상대방이 불쾌감을 느낄 수 있는 언어적 표현, 비언어적 행동, 일체의 성적 대상화를 하지 말아주세요.
                    </li>
                    <ul>
                        <li>“시커먼 남자들끼리만 있어서 칙칙했는데 여성분들 오니까 좋네~ 여기는 꽃밭이네~”</li>
                        <li>‘앙 기O찌’를 감탄사로 사용하는 행위</li>
                    </ul>
                    <li>타인의 소지품을 동의 없이 만지지 말아주세요.</li>
                    <ul>
                        <li>휴대폰, 노트북 등</li>
                        <li>장애인 보조 기구 (보청기, 휠체어 등)</li>
                    </ul>
                    <li>위험한 물건을 소지하지 마세요.</li>
                    <ul>
                        <li>야구 배트, 화학 물품류, 화기, 날카로운 물건 등</li>
                    </ul>
                    <li>법에 저촉되는 모든 폭력성을 띤 행위를 하지 말아주세요.</li>
                    <li>위의 모든 행위를 부추기거나 장려하는 행위를 하지 말아주세요.</li>
                </ul>
            </div>
            <div>
                <h3>서로 다름을 존중해주세요</h3>
                <p>
                    성별, 성적 지향, 성 정체성, 국적, 인종, 지역, 종교, 나이, 사회적 신분, 학력, 지식 수준, 외모, 장애,
                    질병, 음식 선호 등에 상관없이 함께 즐길 수 있는 행사를 만들어주세요.
                </p>
                <ul>
                    <li>성별 고정관념에 기반한 언행을 자제해주세요.</li>
                    <ul>
                        <li>“남자 / 여자들은 다 그렇죠.”</li>
                        <li>여성 개발자에게 “프론트엔드 개발자시죠?”라고 넘겨짚는 행위</li>
                        <li>
                            상대방이 여성이라는 이유로 자신보다 지식 수준이 낮을 거라 생각하고 과도하게 설명하는 행위
                        </li>
                    </ul>
                    <li>성적 지향, 성 정체성, 성별 표현을 농담의 소재나 비하의 표현으로 사용하지 말아주세요.</li>
                    <ul>
                        <li>“게이냐?”, “그렇게 머리가 짧으니 레즈 같다.”</li>
                    </ul>
                    <li>나이, 사회적 신분, 연차에 의한 차별을 하지 말아주세요.</li>
                    <ul>
                        <li>나이가 어리다는 이유로 처음 보는 사람에게 반말하는 행위</li>
                        <li>“연차가 낮아서 잘 모르시겠지만…”</li>
                    </ul>
                    <li>소득 및 재산 격차에 따라 다를 수 있는 내용을 단정지어 얘기하지 말아주세요.</li>
                    <li>인종을 비하하거나 지역 또는 국적 편견에 기반한 표현을 자제해주세요.</li>
                    <ul>
                        <li>쪽O리, 죠O징, 짱O 같은 국적에 따른 차별 발언</li>
                        <li>흑형, 양키, 바나나와 같은 인종에 따른 차별 발언</li>
                        <li>전OO언과 같은 지역에 따른 차별 발언</li>
                    </ul>
                    <li>다른 사람의 종교나 지지 정당을 비하하거나 자신의 신념을 강요하지 말아주세요.</li>
                    <ul>
                        <li>“OO교 사람들은 이래서 안 돼”</li>
                        <li>“OO당 사람들은 이래서 안 돼”</li>
                    </ul>
                    <li>상대방의 외모에 대한 불필요한 평가나 차별 발언을 하지 않도록 주의해주세요.</li>
                    <ul>
                        <li>“OO님은 개발자처럼 생기셨어요/안 생기셨어요”</li>
                        <li>(누군가를 특정할 때) “얼굴이 예쁘장했던 여자 개발자”</li>
                    </ul>
                    <li>장애인을 도움이 필요한 대상으로 보고 편견에 기반한 행동을 하지 말아주세요.</li>
                    <ul>
                        <li>
                            요청하지 않았는데 자신이 생각한 방식으로 행동하는 것은 방해입니다. 먼저 상대의 의사를
                            확인하고 상대가 요청하는 방식으로 편의 제공을 해야 합니다.
                        </li>
                    </ul>
                    <li>질병 또는 장애를 비하하지 마세요.</li>
                    <li>장애를 비하하는 단어를 사용하지 말아주세요.</li>
                    <ul>
                        <li>장님, 애꾸눈, 귀머거리, 벙어리, 절름발이 등</li>
                        <li>“장애인이냐?”, “정신병자 같지 않아?”</li>
                        <li>“레거시 코드 때문에 암 걸릴 것 같아.”</li>
                    </ul>
                    <li>다른 식습관을 강요하거나 무시하는 언행을 하지 말아주세요.</li>
                    <ul>
                        <li>“술을 안 마시면 인생을 무슨 낙으로 살아요?”</li>
                        <li>“건강을 생각해서라도 고기를 먹어야지.”</li>
                        <li>
                            식습관에는 다른 사람이 납득할 만한 이유가 필요하지 않습니다. 이유를 묻거나 설명을 강요하지
                            말아주세요.
                        </li>
                    </ul>
                    <li>학력이나 전공에 따라 차별하는 발언을 하지 말아주세요.</li>
                    <ul>
                        <li>“고졸이세요?”</li>
                        <li>“비전공자면 이런 내용 모르시겠네요”</li>
                    </ul>
                    <li>위의 모든 편견과 차별을 부추기거나 장려하는 행위를 하지 말아주세요.</li>
                </ul>
                <p>
                    당신의 언행은 당신의 의도와 다르게 받아들여질 수 있습니다.
                    <br />
                    상대방이 불쾌하게 여긴다면 해당 언행을 중지해주세요.
                </p>
            </div>
            <div>
                <h3>파이콘 한국 준비위원회 및 행사 스태프로 사칭하거나 허위 정보를 유포하지 말아 주세요</h3>
                <p>
                    스태프 사칭으로 인해 잘못된 정보로 참가자에게 혼란을 줄 수 있으며, 도움이 필요한 참가자가 제때
                    도움을 받지 못할 수 있습니다. 파이콘 한국 준비위원회는 공식적인 채널 외에 정보를 다른 곳에서
                    공개하거나 유포하지 않습니다. 이는 파이콘 한국 참가자 간 정보 격차로 발생하는 불이익을 막기
                    위해서입니다.
                </p>
                <ul>
                    <li>
                        행사 공간을 포함하여 행사 스태프로 오인될 수 있는 행위(스태프 프로필과 유사한 이미지 또는 닉네임
                        등)를 의도적으로 하지 말아 주세요.
                    </li>
                    <ul>
                        <li>행사 진행에 방해된다고 판단될 시, 프로필 수정 요청 등의 조치를 취할 수 있습니다.</li>
                    </ul>
                    <li>
                        공식 정보(홈페이지, 공지, 공식 SNS, 파이콘 한국 이메일로 전송된 메일 등) 외 정보를 유포하지
                        말아주세요.
                    </li>
                    <ul>
                        <li>“내 친구/지인이 파이콘 한국 준비위원회인데, 이렇게 이야기하던데?”</li>
                    </ul>
                </ul>
            </div>
        </PartBlock>
    );
};

const CommunicationPart = () => {
    return (
        <PartBlock>
            <Target id="communication" />
            <h2>의사 소통</h2>
            <div>
                <h3>발표할 때에는 발표자를 존중해주세요</h3>
                <ul>
                    <li>발표 중에는 발표자나 다른 청중들에게 방해되는 행동을 하거나 소음을 내지 말아주세요.</li>
                    <li>
                        발표자가 분명한 의사를 표명하기 전까진 발표를 중간에 끊는 행위는 제한됩니다. 질문은 정해진
                        시간에 정해진 방법대로 해주세요.
                    </li>
                </ul>
            </div>
            <div>
                <h3>대화는 같이 하는 것입니다</h3>
                <p>
                    열린 공간, 파이콘 한국 슬랙 및 유튜브 채널과 같은 다양한 곳에서 많은 사람들이 대화에 참여합니다.
                    나의 의견 만큼 다른 사람의 의견도 중요함을 항상 기억해주세요. 말을 끊고 방해하거나 언성을 높이는
                    일은 자제해주세요.
                </p>
                <ul>
                    <li>발언 기회를 소수가 과하게 점유하지 않도록 주의해주세요. 발언 기회를 골고루 가져요.</li>
                    <li>상대와 갈등이 생기더라도 정중한 태도를 유지해주세요.</li>
                </ul>
            </div>
            <div>
                <h3>건설적인 토론을 해주세요</h3>
                <p>우리는 서로 다른 배경과 지식을 가지고 있습니다. 의견의 불일치는 자연스러운 일입니다.</p>

                <p>
                    비판과 비난은 다릅니다. 건설적인 비판은 커뮤니티와 구성원의 발전에 도움이 됩니다. 하지만 남을
                    깎아내리고 상처 주기 위한 목적의 비난은 금지됩니다. 상대방과 생각이 다르다면 정중하고 올바른
                    방법으로 의견을 이야기해주세요. 올바른 비판에는 관대하게 수용하는 자세를 가져주세요.
                </p>
                <ul>
                    <li>정중한 표현을 사용해주세요.</li>
                    <ul>
                        <li>그 언어/라이브러리/운영체제는 쓰레기야 X</li>
                        <li>그 언어/라이브러리/운영체제는 OO한 단점이 있다고 생각해 O</li>
                    </ul>
                    <li>사람이 아닌 내용을 비판해주세요.</li>
                    <ul>
                        <li>OO 이론을 믿는 사람들은 멍청한 사람들이야 X</li>
                        <li>OO 이론은 근거가 부족한 이론이야 O</li>
                    </ul>
                    <li>결점이나 문제점이 아닌 대안에 집중해주세요.</li>
                    <li>내 지식을 과시하기 위해 다른 사람을 망신주지 마세요.</li>
                </ul>
            </div>
            <div>
                <h3>일방적인 선전이나 선동을 하지 말아주세요</h3>
                <p>
                    개인의 생각과 정치적 성향은 존중되어야 합니다. 하지만 다른 참가자의 원활한 행사 참여를 방해하거나
                    문맥과 상관없는 일방적 선전이나 선동은 금지됩니다.
                </p>
                <ul>
                    <li>발표 슬라이드에 정치적 구호를 담는 행위</li>
                    <li>
                        파이콘 한국 공식 SNS 댓글, 파이콘 한국 슬랙, 파이콘 한국 유튜브 채널에서 반복적이고 지속적으로
                        선전하여 다른 사람의 의견을 보기 어렵게 하는 행위
                    </li>
                </ul>
            </div>
        </PartBlock>
    );
};

const PrivacyPart = () => {
    return (
        <PartBlock>
            <Target id="privacy" />
            <h2>프라이버시</h2>
            <div>
                <h3>사진과 영상을 촬영할 때 주의해주세요</h3>
                <p>
                    사진과 영상을 찍을 때는 반드시 찍히는 인물의 의사를 존중해주세요. 사진과 영상에 찍히는 것을 원하지
                    않는 사람도 있을 수 있습니다.
                </p>
                <ul>
                    <li>
                        파이콘 한국 준비위원회가 운영하는 모든 행사는 사진과 영상에 찍히는 것을 원하지 않는 사람들을
                        위한 방법이 마련됩니다.
                    </li>
                    <li>구체적인 의사 표현 방법은 각 행사마다 별도로 공지됩니다.</li>
                </ul>
                <p>온라인으로 진행되는 행사 공간에서는 아래와 같이 적용됩니다.</p>
                <ul>
                    <li>발표 영상을 무단으로 캡쳐하는 행위를 하지 말아주세요. </li>
                </ul>
            </div>
            <div>
                <h3>사적인 정보를 지켜주세요</h3>
                <ul>
                    <li>발표에 당사자의 허락 없이 상대를 특정할 수 있는 정보를 담지 말아주세요.</li>
                    <li>
                        대화 상대의 동의 없이 대화 메시지 또는 프로필을 포함한 개인 정보를 캡쳐하거나 유포하지
                        말아주세요.
                    </li>
                    <li>
                        상대방이 질문에 대답하기를 원하지 않는다면, 재차 묻지 말아 주세요. 다른 사람의 의사를
                        존중해주세요.
                    </li>
                    <li>나에겐 알려져도 문제가 없는 정보라도 다른 사람에게는 그렇지 않을 수 있음을 이해해주세요.</li>
                    <li>어떠한 질문은 그 자체로 큰 실례가 되기도 합니다.</li>
                    <ul>
                        <li>“나이가 어떻게 되세요?”</li>
                        <li>“결혼하셨어요?”, “아이가 있으세요?”, “애인 있으세요?”</li>
                        <li>“드시는 약은 어떤 약인가요?”</li>
                        <li>“어떻게 하다가 장애를 갖게 되셨나요?”</li>
                    </ul>
                </ul>
            </div>
        </PartBlock>
    );
};

const ForProfitPart = () => {
    return (
        <PartBlock>
            <Target id="profit" />
            <h2>영리 행위</h2>
            <div>
                <p>
                    파이콘 한국은 허가를 받지 않은 단체의 영리 행위를 금지합니다. 영리 행위는 물건을 팔아서 이득을
                    취하는 행위, 당장 이득을 취하지는 않지만 장기적으로 개인 혹은 단체가 금전적인 이득을 취할 수 있는
                    행위를 의미합니다.
                </p>
                <ul>
                    <li>직업 소개 등을 구실로 참가자들에게 접근해 개인 정보를 물어보는 행위</li>
                    <li>행사장에서 무단으로 전단지를 배포하는 행위</li>
                    <li>기타 영리 행위</li>
                </ul>
                <p>
                    파이콘 한국의 허가를 받지 않은 영리 행위가 발견될 경우, 원활한 행사 진행을 위해 법적 조치를 취할 수
                    있습니다.
                </p>
            </div>
        </PartBlock>
    );
};

const PublicMoralsPart = () => {
    return (
        <PartBlock>
            <Target id="public-manners" />
            <h2>공중 도덕</h2>
            <p>
                파이콘 한국이 진행되는 공간은 많은 사람들이 모이는 공공장소입니다.
                <br />
                모두가 쾌적하게 행사를 즐길 수 있도록 공중 도덕을 지켜주세요.
            </p>
            <div>
                <h3>소음 및 발표에 방해가 되는 공해를 줄여주세요</h3>
                <ul>
                    <li>이어폰/헤드폰을 사용하지 않고 큰 소리로 재생하는 영상/음악 소리</li>
                    <li>마이크나 확성기를 이용한 부대 행사 진행</li>
                </ul>
            </div>
            <div>
                <h3>공간을 깨끗하게 사용해주세요</h3>
                <ul>
                    <li>행사가 열리는 공간의 규칙을 준수해주세요.</li>
                    <li>자기가 사용한 자리는 깨끗하게 치워주세요.</li>
                    <li>쓰레기는 쓰레기통에 버려주세요. 재활용품은 분리수거 규칙을 지켜주세요.</li>
                </ul>
            </div>
        </PartBlock>
    );
};
const ReportPart = () => {
    return (
        <PartBlock>
            <Target id="reporting" />
            <h2>신고하기</h2>
            <div>
                <h3>이렇게 신고해주세요</h3>
                <p>
                    당신에게 어떤 문제가 발생했거나 다른 사람이 문제에 처한 것을 보셨거나, 불편 사항이 있으시다면 파이콘
                    한국 준비위원회(이하 준비위)에게 도움을 요청해주세요. 위급한 상황이라면 준비위에게 도움을 청함과
                    동시에 경찰, 소방서 등 관할 기관에 신고해주세요.
                </p>
                <ul>
                    <li>
                        대표 연락처 <MailBlock>coc@pycon.kr</MailBlock>
                    </li>
                    <li>준비위는 행동 강령을 위반했을 때 어떻게 조치해야 하는지 교육을 받은 상태입니다.</li>
                    <li>
                        오프라인 공간에서 준비위는 준비위임을 인지할 수 있는 눈에 띄는 티셔츠를 입고 있을 것입니다.
                        온라인 공간에서는 상단 이메일을 통해 연락하실 수 있습니다.
                    </li>
                </ul>
                <p>
                    행동 강령 위반 행위가 접수되면 파이콘 한국 준비위원회는 사건 처리 절차에 따라 즉시 참가자를
                    보호하고, 위반 행위가 중단되도록 대응할 것입니다. 필요한 경우 행사장 퇴장 등의 조치나 사법/의료
                    기관에 연락을 취할 것입니다. 파이콘 한국의 스태프는 참가자의 안전을 위협할 수 있는 사건/사고가
                    발생했을 때 가장 먼저 도움을 드릴 수 있기를 바라며, 신속하고 적절한 대응을 하기 위해 노력하겠습니다.
                </p>
                <p>
                    행동 강령 위반이 의심되지만 확신이 들지 않는 경우에도 준비위원회에 알려주시면 준비위원회에서 정보를
                    더 수집하고 판단하여 조치를 취하거나 취하지 않을 것입니다.
                </p>
                <p>여러분의 용기가 더욱 안전한 커뮤니티를 만드는 데 도움이 됩니다.</p>
            </div>
            <div>
                <h3>행동 강령에는 이런 한계가 있어요</h3>
                <p>
                    안전하고 쾌적한 커뮤니티를 위한 다양한 노력에도 불구하고, 행동 강령이 모든 위협으로부터 참가자들을
                    완전하게 보호할 수는 없습니다.
                </p>
                <ul>
                    <li>위급한 상황이라면 스태프에게 도움을 청함과 동시에 경찰, 소방서 등 관할 기관에 신고해주세요.</li>
                    <li>
                        사실 확인이 어려운 경우 심증만으로 피신고자나 단체에 조치를 취하기는 어렵습니다. 조치 여부와
                        관계없이 위협을 느끼신다면 동행 등의 도움을 드릴 수 있습니다.
                    </li>
                </ul>
            </div>
        </PartBlock>
    );
};

const UrgePart = () => {
    return (
        <PartBlock>
            <Target id="requests" />
            <h2>당부의 말</h2>
            <div>
                <h3>준비위원회를 존중해주세요</h3>
                <p>
                    파이콘 한국 준비위원회 구성원은 모두 여러분과 같은 파이썬 커뮤니티의 일원이며, 파이콘 한국을 위해
                    대가 없이 자발적으로 시간과 노력을 제공하고 있습니다.
                </p>
                <p>
                    파이콘 한국 준비위원회는 참가자분들을 존중하며 도움을 드리기 위해 노력하고 있습니다. 여러분도 파이콘
                    한국 준비위원회를 존중해주시길 부탁드립니다.
                </p>
                <ul>
                    <li>
                        원활한 행사 진행을 위해 명찰 패용 등의 협조를 요청할 수 있습니다. 현장에서 준비위원회의 요청을
                        존중하고 따라주세요.
                    </li>
                    <li>
                        준비위원회 구성원의 사생활은 보호되어야 합니다. 행사에 관해 궁금점이 있다면 파이콘 준비위원회
                        구성원 개인의 SNS가 아닌 공식 채널로 문의해주세요.
                    </li>
                </ul>
                <p>
                    파이콘 한국 준비위원회 구성원 모두는 다른 모든 참가자들과 동일하게 행동 강령을 지킬 것이며, 파이콘
                    한국 준비위원회 구성원이 행동 강령을 위반하는 경우 다른 참가자들과 동일한 절차와 기준으로 공정하게
                    대응할 것입니다.
                </p>
            </div>
        </PartBlock>
    );
};

const ContributePart = () => {
    return (
        <PartBlock>
            <Target id="contribution" />
            <h2>기여하기</h2>
            <p>
                본 파이콘 한국 행동 강령은 의도와 목적, 지향하는 가치를 더 잘 전달하기 위해 내용이 변경될 수 있습니다.
                <br />
                여러분의 기여를 통해 파이콘 한국 행동 강령은 지속적으로 발전할 수 있습니다.
            </p>
            <div>
                <h3>이런 걸 참고했어요</h3>
                <p>파이콘 한국 행동 강령의 내용들은 다음과 같이 앞서서 고민한 사람들의 생각을 참고하였습니다.</p>
                <p>참고한 문서</p>
                <ul>
                    <li>Elastic 커뮤니티 행동규범</li>
                    <li>스포카 크리에이터 행동 강령</li>
                    <li>Github Open Source Guides 행동 강령</li>
                    <li>OpenStack Code of Conduct</li>
                    <li>JSConf EU 2019 행동 강령</li>
                    <li>JSConf Korea 2019 행동 강령</li>
                    <li>DEFCON 행동 강령</li>
                    <li>PyCon US 2019 행동 강령</li>
                    <li>How and why we improved DjangoCon Europe’s Code of Conduct</li>
                </ul>
            </div>
            <div>
                <h3>제안할 내용이 있다면 기여해주세요</h3>
                <p>
                    파이콘 한국 행동 강령은 더 나은 커뮤니티를 위해 계속해서 변화하고 있습니다. 파이콘 한국 준비위원회와
                    많은 사람들의 노력에도 불구하고, 본 행동 강령에는 여전히 개선할 점이 존재합니다.
                </p>
                <p>
                    행동 강령을 개선하는 과정에 여러분도 동참할 수 있습니다. 제안, 의견 혹은 행동 강령과 관련된 어떠한
                    내용이라도 언제든지 자유롭게 <MailBlock>coc@pycon.kr</MailBlock>로 보내주세요. 보내주신 의견은
                    준비위원회가 면밀히 검토하겠습니다.
                </p>
                <p>
                    파이콘 한국 준비위원회는 투명성과 기록의 가치를 믿습니다. 행동 강령에 변경 사항이 있다면 그 내역을
                    모두 기록하고 웹사이트를 통해 공개할 것입니다. (
                    <StyledLink url="https://github.com/pythonkr/pycon-code-of-conduct/releases">
                        릴리즈 노트
                    </StyledLink>
                    )
                </p>
                <p>
                    본 행동 강령은 파이콘 한국 2019 준비위원회가 외부 전문가들의 자문을 받아 작성하였습니다.
                    <br />
                    파이콘 한국 2020 준비위원회가 온라인 행사에 맞추어 일부 내용을 수정하였습니다.
                </p>
            </div>
        </PartBlock>
    );
};

export default function CocContext() {
    return (
        <ContentBackgroundBlock>
            <TitleBlock>
                <h1>파이콘 한국 행동 강령</h1>
            </TitleBlock>
            <Shortcut />
            <IntentPart />
            <CommunityPart />
            <CommunicationPart />
            <PrivacyPart />
            <ForProfitPart />
            <PublicMoralsPart />
            <ReportPart />
            <UrgePart />
            <ContributePart />
        </ContentBackgroundBlock>
    );
}
