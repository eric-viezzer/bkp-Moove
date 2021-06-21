
// Código do sensor de obstáculo
int objeto;
int pinSensor = 7;

void setup()
{
  pinMode(pinSensor, INPUT);
  Serial.begin(9600);
}

void loop()
{
  objeto = digitalRead(pinSensor);
  Serial.println(objeto);
  delay(900);
}
