import Domain.*;
import org.junit.Test;

public class FeedbackProviderTest {
@Test
public void provideFeedBack_returnsCorrectBlackResponses()
{
    Pin codePin1 = new Pin(1, PinColor.RED);
    Pin codePin2 = new Pin(2, PinColor.GREEN);
    Pin codePin3 = new Pin(3, PinColor.BLUE);
    Pin codePin4 = new Pin(4, PinColor.YELLOW);

    Pin guessPin1 = new Pin(1, PinColor.RED);
    Pin guessPin2 = new Pin(2, PinColor.GREEN);
    Pin guessPin3 = new Pin(3, PinColor.BLUE);
    Pin guessPin4 = new Pin(4, PinColor.YELLOW);
    Code code = new Code();
    code.create(codePin1,codePin2,codePin3,codePin4);
    Guess guess = new Guess();
    guess.create(guessPin1,guessPin2,guessPin3,guessPin4);
    Feedback feedback= code.makeGuess(guess);


}
}