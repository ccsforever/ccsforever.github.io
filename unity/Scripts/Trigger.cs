using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
using UnityEngine.UI;
using TMPro;

public class Trigger : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void GoToUnity();

    public TextMeshProUGUI token;

    void Start()
    {
        token.text = "bad";
#if UNITY_WEBGL == true && UNITY_EDITOR == false
        GoToUnity();
#endif
    }

    public void RecieveUnity(string coin)
    {
        token.text = coin;
    }
    void Update() {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            RecieveUnity("Up");
        }
        if (Input.GetKey(KeyCode.DownArrow))
        {
            RecieveUnity("Down");
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            RecieveUnity("Left");
        }
        if (Input.GetKey(KeyCode.RightArrow))
        {
            RecieveUnity("Right");
        }
    }
}