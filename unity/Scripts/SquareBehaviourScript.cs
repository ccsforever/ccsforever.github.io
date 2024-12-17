using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{

    [DllImport("__Internal")]
    private static extern void reactSpeedUp(float curSpeed, float value);
    [DllImport("__Internal")]
    private static extern void reactSpeedDown(float curSpeed, float value);

    bool isRotate = false;
    float rotateSpeed = 30.0f;
    Vector3 offset, rotation;

    void unitySpeedUp(float rate)
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
        reactSpeedUp(rotateSpeed, rate);
#endif
        this.rotateSpeed = this.rotateSpeed + rate;
            }
    void unitySpeedDown(float rate)
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
        reactSpeedDown(rotateSpeed, rate);
#endif
        this.rotateSpeed = this.rotateSpeed - rate;
            }
    private void OnMouseOver()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Debug.Log("Left, Speed Up");
            unitySpeedUp(5.0f);
            return;
        }

        if (Input.GetMouseButtonDown(1))
        {
            Debug.Log("Right, Speed Down");
            unitySpeedDown(5.0f);
            return;
        }
    }
    public void setSpeed(float rate) {
        this.rotateSpeed = rate;
    }
    public void toggleRotate()
    {
        this.isRotate = !this.isRotate;
    }
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            this.transform.position = this.transform.position + new Vector3(0, 1, 0) * Time.deltaTime;
        }
        if (Input.GetKey(KeyCode.DownArrow))
        {
            this.transform.position = this.transform.position + new Vector3(0, -1, 0) * Time.deltaTime;
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            this.transform.position = this.transform.position + new Vector3(-1, 0, 0) * Time.deltaTime;
        }
        if (Input.GetKey(KeyCode.RightArrow))
        {
            this.transform.position = this.transform.position + new Vector3(1, 0, 0) * Time.deltaTime;
        }
        if (this.isRotate)
        {
            offset = Vector3.one;

            rotation.z = -(offset.x + offset.y) * Time.deltaTime * rotateSpeed;

            transform.Rotate(rotation);
        }
        if (Input.GetKey(KeyCode.A))
        {
            toggleRotate();
        }
        OnMouseOver();
    }
}
