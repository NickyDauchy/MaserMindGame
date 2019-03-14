import Domain.Code;
import Domain.Pin;
import Domain.PinColor;
import org.junit.Test;

public class FeedbackProviderTest {
@Test
public void provideFeedBack_returnsCorrectBlackResponses()
{
    Pin pin1 = new Pin(1, PinColor.RED);
    Pin pin2 = new Pin(2, PinColor.GREEN);
    Pin pin3 = new Pin(3, PinColor.BLUE);
    Pin pin4 = new Pin(4, PinColor.YELLOW);
    Code code = new Code();
    code.enterCode(pin1,pin2,pin3,pin4);
    code.makeGuess(pin1,pin2,pin3,pin4);

}
}