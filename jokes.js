let random = Math.floor(Math.random() * 95 +1)
const jokes = [
  "संता घबराया हुआ पुलिस स्टेशन जा रहा था। संता — मैं गिरफ्तार होने जा रहा हूं। बंता — क्यों भाई, तुमने क्या किया? संता — मैंने अपनी बीवी के सर पर जोर से डंडा मार दिया था। बंता — तो वो मर गई क्या? संता — नहीं बच गई और अब वो मुझे नहीं छोड़ेगी। 😜😛🤓 😎🤠😂😀",
  "लॉटरी कंपनी से लूलू शराबी को एक कॉल आया : सर, आप पटाया की यात्रा की दो टिकट जीते हैं। आप किसके साथ जाओगे ? लूलू शराबी मैं अकेला ही दो बार जाऊंगा। 😜😛🤓 😎🤠😂😀",
  "चिंटू लड़की से:-आपने पहचाना मुझे?? लड़की:-नहीं,आप कौन हो?? चिंटू:-मैं वही हूं, जिसे आपने कल भी नहीं पहचाना था। 😜😛🤓 😎🤠😂😀",
  "बाप:- बेटा,अमेरिका में 15 साल के बच्चे भी अपने पैरों पर खड़े हो जाते हैं, बेटा:- लेकिन पापा भारत में तो एक साल का बच्चा भागने भी लग जाता है। 😜😛🤓 😎🤠😂😀",
  "Boy:-मैं तुम्हारे साथ शादी नहीं कर सकता मेरे घर वाले नहीं मान रहे हैं, Girl:-तुम्हारे घर में कौन-कौन हैं??; Boy:-एक पत्नी और दो बच्चे। 😜😛🤓 😎🤠😂😀",
  "लूलू शराबी कहता है, थोड़ी सी बारिश हुई नहीं कि न्यूज में नहाती और भीगती हुई, लड़िकयों की फोटो आ जाती है। जैसे कि हम लोंडे तो वाटरप्रूफ पैदा हुए है। 😂😂😂😂😂",
  "चाणक्य तो रहे नहीं, सोचा मैं ही बता दूं । पत्नियों के किसी भी काममें पति की सलाह उतनी ही फालतू है। जितनी Tea शब्द में eव a अक्षर की होती है। 😜😛🤓 😎🤠😂😀",
  "Son: पापा बुलेट दिला दो। Father: पड़ोसन की लड़की को देख बस से जाती है। Son: यही तो देखा नहीं जाता। 😜😛🤓 😎🤠😂😀",
  "लूलू शराबी टीटू पंडित से कहता है, शादियों के मौसम में दूल्हे की कार में आगे की सीट पर बैठने वाला आदमी, अपने आपको किसी दूल्हे से कम नहीं समझता है, उसके भी अलग ही जलवे है। 😜😜😜😜😜",
  "आजकल समाज में बहुत ही जायदा भेदभाव है, ताश या rummy के गेम को लड़कियां खेलें तो,, किटी पार्टी और हम लड़के खेलें तो जुआ पार्टी। बॉयफ्रेंड – डार्लिंग तुम्हारे घर वाले इतनी आसानी से कैसे मान गए शादी के लिए, गर्लफ्रेंड – कुछ नहीं बस एक Answer का जवाब दिया तुरंत मान गए। बॉयफ्रेंड – ऐसा क्या पूछा घर वालों ने ? गर्लफ्रेंड – पूछा की लड़का क्या कर रहा है ? मैंने कहा पेट में लात मार रहा है। बस मान गए। 😜😛🤓 😎🤠😂😀",
  "महोब्बत के हर रास्ते में दर्द ही दर्द मिलेगा, मैं सोच रहा हूँ उस रास्ते पर मेडिकल खोल लू …मस्त चलेगा। 😜😛🤓 😎🤠😂😀",
  "इतनी भयानक गर्मी है साला जल जाएंगे, अब किसी का यार क्यों नही हंस रहा। 😜😛🤓 😎🤠😂😀",
  "पुरानी फिलमों में जहर बहुत ही घटिया क्वालिटी का होता था, एक बोतल पी लेने के बाद भी हीरोईन पूरा गाना गा लेती थी। 😜😛🤓 😎🤠😂😀",
  "बहुत दिनों की कड़ी मेहनत के बाद आज उसका रिप्लाय आया।😍; बोली.. दुबारा मैसेज किया तो मुहँ तोड़ दूंगी तुम्हारा।😠 😜😛🤓 😎🤠😂😀",
  "TV सीरियल में एक्ट्रेस की जिंदगी में भूचाल आ जाये, पति मर जाये किडनैप हो जाये लेकिन मेकअप 24 घंटे एकदम परफेक्ट होता है। 😜😛🤓 😎🤠😂😀",
  "लड़की- तुमने तो कहा था मेरा करोड़ों का कारोबार है, लडका- करोडों का नहीं पकोड़ों का कहा था। 😜😛🤓 😎🤠😂😀",
  "अच्छे लोगों का जन्म धरती पर बार बार नही होता इसलिए मेरी कद्र किया करो। 😜😛🤓 😎🤠😂😀",
  "ना जाने कौन-कौन से विटामिन हैं में, एक दिन यूज़ नहीं करो तो सारा दिन कमजोरी सी महसूस होती है। 😜😛🤓 😎🤠😂😀",
  "गर्लफ्रेड बनाने के लिए क्या-क्या लगता है?? आधार कार्ड, राशन कार्ड, पेन कार्ड या ATM. 😜😛🤓 😎🤠😂😀",
  "आज एक लड़की का मैसेज आया ; पोस्ट करने के सिवाये कुछ और भी आता है क्या?? me- हां जी, हाथ छोडकर साईकल चला लेती हूँ। 😜😛🤓 😎🤠😂😀",
  "बैंक वाले भी गजब हैं, सबको होम लोन देते हैं, लेकिन खुद की ब्रांच किराए पर खोलते हैं। 😜😛🤓 😎🤠😂😀",
  "अपने देश में ज़ब तक लड़का अपने पैरों पर खडा होता है, तब तक उसकी प्रेमिका का लड़का दौड़ने लगता है। 😜😛🤓 😎🤠😂😀",
  "अचानक वाईफाई बंद हो गया, चेक किया तो पता चला कि,, पड़ोसी ने 2 महीने से बिल नहीं भरा है। कितने गैरजीम्मेदार लोग हैं। 😜😛🤓 😎🤠😂😀",
  "छोटी हाईट की छोरीयों को भी बड़ा फायदा रहता है, 25 साल की होने के बाद भी रिश्तेदार पैसे दे जाते हैं। ले बेटी कुरकुरे खा लेना। 😜😛🤓 😎🤠😂😀",
  "कजूंस ने अखबार में विज्ञापन दिया। हेल्पर चाहिये। मिठाई की दुकान खोली, योग्यता – डायबिटीज़ अनिवार्य। 😜😛🤓 😎🤠😂😀",
  "क्या जरूरत है मुझे, सूली पर लटकाने की। मेरा मोबाइल छीन लो, मैं तो खुद मर जाऊंगा। 😜😛🤓 😎🤠😂😀",
  "मैंने गर्लफ्रेंड की जासूसी करने के लिए, एक दोस्त को उसका नंबर दिया था। आज उन दोनों की शादी का कार्ड आया है, भलाई का तो जमाना ही नहीं रहा। 😜😛🤓 😎🤠😂😀",
  "कुछ हरामखोर दोस्त जबरदस्ती प्यार करवा देते हें, भाई-भाई वो देख चश्मे वाली तुझे ही देख रही है। 😜😛🤓 😎🤠😂😀",
  "सोचा था 2 शादियां करूंगा, 1 पीटेगी तो दूसरी बचायेगी। रात को सपना देखा एक ने पकड़ रखा था, दूसरी पीट रही थी। 😜😛🤓 😎🤠😂😀",
  "जिगर में दर्द होता है, दिल में गम होता है, तिर्छी नज़रों से देखना कोई गुनाह नही है, मुझे तो बहुत प्यार होता है। 😜😛🤓 😎🤠😂😀",
  "चाँदनी रात में यह दिल दरिया में डूब जाता है, अच्छा होता की लड़कियों की मांग नहीं होती। 😜😛🤓 😎🤠😂😀",
  "सुना है लोग उसे आँधी लगते हैं, वो किसी और की धरती खाते है। 😜😛🤓 😎🤠😂😀",
  "आज तो गर्मी में आग लगी है, अब सिन्दूर भी सेंट्रल गवर्मेंट सस्ता हो गया है। 😜😛🤓 😎🤠😂😀",
  "संता को रात को सपना आया, उसने खुद को किसी खुदाई में खोते हुए देखा, सपना देखकर उसने रोज धरती में खुदाई करने वाले को सवर्ण किया। 😜😛🤓 😎🤠😂😀",
  "यादों के सहारे जीने का इरादा तो नहीं, फिर भी जी लेते है, तन्हाई में दोस्तों की तरह, चिरागों के साथ रात बिता लेते हैं। 😜😛🤓 😎🤠😂😀",
  "आजकल बच्चे कितना अच्छा तेल पीते हैं, सोचा था नाखून के लिए उपयोग होगा, पर ये तो माल्दा के पास कोई रक्त पत्र बना लिया है। 😜😛🤓 😎🤠😂😀",
  "आदमी ने मास्क पहना, पत्नी बोली तुम मरने वाले हो क्या ? आदमी बोला नहीं, वायरस तुम्हारे पास है। 😜😛🤓 😎🤠😂😀",
  "लड़का: पापा कैसे चलता है मोटर साइकिल? पिता: पहले तीस मिनट बात मत कर, बस अपने दोनों पैरों की जमीन की सीधी होने के बाद पास आना, फिर देखते हैं, कैसे चलता है मोटर साइकिल। 😜😛🤓 😎🤠😂😀",
  "संता – तेरी बीवी तो अनपढ़ है, फिर भी तूने उसको मेडिकल स्टोर खोलने की इजाजत क्यों दी? बंता – जानिए उसने यहाँ बोला है की यहाँ बिना पढ़ाई के भी मेडिकल स्टोर खोल सकते है। 😜😛🤓 😎🤠😂😀",
  "केला खाने से पहले बीवी से पूछ लिया, आज तो फलाहार करता हूँ, तुम क्यों नहीं करती? बीवी – कोई बात नहीं, जिन्दगी भर तुम्हें अच्छा फलाहार मिलेगा। 😜😛🤓 😎🤠😂😀",
  "नौकरानी – सर आपकी पत्नी ने आपको आज बोला आप आलू लाने वाले हो तो कौन सा लाया हूँ, आप बोल देते हैं, आलू लाकर काट दे, उसकी बेहेन की तरह स्लाईस करके चिप्स बना दूंगा। 😜😛🤓 😎🤠😂😀",
  "संता – अरे बंता, कोई लड़की देख कर आई है। बंता – छोड़ बे संता, ये तो मेरी फैमिली की है। संता – क्या, कैसे? बंता – वो देख के आई है की तेरी मां तो बहुत बदल गई है, तेरी सोच ही नहीं रही। 😜😛🤓 😎🤠😂😀",
  "बंता – क्या लड़की का या लड़के का स्टेटस होने पर आपका क्या राय है? संता – जो लड़की अपने पति का स्टेटस डालती है वह ज्यादा इमोशनल है, और जो लड़के अपनी पत्नी का स्टेटस डालता है वह बेवकूफ है। 😜😛🤓 😎🤠😂😀",
  "मांगलिक दोष के कारण संता की शादी देर से हो गई थी। संता ने अपने बेटे से कहा – देख बेटा शादी देर से होने से इसका मतलब है की मेरी पत्नी को लगा था कि आज मुझे घर नही आना है, तो मैं आज ठंडी कॉफी पीकर आया हूं। 😜😛🤓 😎🤠😂😀",
  "संता – अरे बंता तू बड़ा आया आजकल। बंता – क्यों, क्या हुआ? संता – यार तू दाढ़ी क्यों नहीं बनवाता? बंता – मेरे पास तो दाढ़ी के लिए बाल नहीं हैं। संता – तूने मेरे बालों को काट कर क्यों नहीं बनवाया? बंता – क्योंकि वो तो चालू बाल हैं, ज्यादा नहीं बढ़ते। 😜😛🤓 😎🤠😂😀",
  "पाठशाला में एक छोटे लड़के ने कहा – मुझे टीचर से प्यार हो गया है, और उसने मुझे चुम्मा भी दिया है। पप्पू – तूने तो कब कहा ये? छोटा लड़का – अभी अभी। पप्पू – तू तो बहुत बड़ा मुर्गा हो गया है। 😜😛🤓 😎🤠😂😀",
  "लड़का – जानु मेरा परफेक्ट गर्लफ्रेंड कैसा है? लड़की – जैसे तेरी माँ वैसी है। लड़का – उसका मतलब? लड़की – अगर तुम्हें उससे बढ़कर मुझसे प्यार हो तो मैं समझ सकती हूँ, नहीं तो उसका मतलब ये नहीं है की वो मुझसे भी बढ़कर है। 😜😛🤓 😎🤠😂😀",
  "संता – यार मैं लड़कियों से लड़कियों से दोस्ती क्यों नही करता? बंता – क्योंकि तुम्हें लड़कियों में दोस्ती करने की जरूरत नहीं, तुम तो उनसे शादी करते हो। 😜😛🤓 😎🤠😂😀",
  "बंता – क्या कमी निकाल रहा है? संता – वो क्या है ना, तेरी महिला वाला इमेज ले लिया है, जल्दी कमी निकाल दे। 😜😛🤓 😎🤠😂😀",
  "बंता – सुना है तेरी शादी के बाद से कामवाली बहुत खुश है, संता – हाँ, उसे लगता है की उसका काम अब किसी अर्थ रहित नहीं है। 😜😛🤓 😎🤠😂😀",
  "पप्पू – मैंने आज अपने लड़के को बचपन की कहानियों का एक संग्रह दिया। संता – किताब में क्या है? पप्पू – कुछ नहीं, खाने-पीने के खर्च पूरे हो जाएंगे तो बता दूंगा। 😜😛🤓 😎🤠😂😀",
  "संता – वाह क्या लड़की है, अब इसको पटाने में कितना पैसा लगेगा? बंता – ज्यादा नहीं, लेकिन उसके पिताजी के साथ विदेश घूमने के लिए अपनी जमीन गिरवी में रखनी पड़ेगी। 😜😛🤓 😎🤠😂😀",
  "संता – भैया जिगर के टुकड़े दो, और उसमें से कोई भी तेज़ चीज़ दो। बंता – क्या हुआ, तेरी तो शादी नहीं हो रही क्या? 😜😛🤓 😎🤠😂😀",
  "एक बार बंता को रात में सपना आया कि उसकी बीवी दूसरे आदमी के साथ चली गई है। बंता – यार सपने में बीवी बदलने का क्या मतलब होता है? संता – ये तो मतलब है कि सुबह हो चुकी है और अब तू चाय बना। 😜😛🤓 😎🤠😂😀",
  "बंता – संता, यार तू अपनी बीवी को बातें बदलने का तो कहैगा नहीं, पर बातें क्यों बदलता है? संता – क्योंकि बदलने वाली बातों का नहीं, बदलते हुए वक्त का आदत है। 😜😛🤓 😎🤠😂😀",
  "पत्नी – तुम हर साल मुझे उसी तारीख को बगीचे में घूमने क्यों लेके जाते हो? पति – क्योंकि मेरी एक दोस्त की वाइफ़ ने बगीचे में अपने एक रिंग गिरा दी थी, मैं तुझसे कहां उसकी तरह की गलती कर रहा हूं। 😜😛🤓 😎🤠😂😀",
  "बंता – बाबू ने शादी के बाद पहली बार अपने पति के जूते चुरा लिए। संता – अबे वो उसे क्यों चुराएगी, उसने तो ससुराल में जाने के बाद पहली बार जूते पहने हैं। 😜😛🤓 😎🤠😂😀",
  "संता – देख कल रात की बारिश से एक गधा डूब गया, इतना सारा पानी पूरे इलाके में कहीं नहीं। बंता – क्या किया फिर उस गधे का? संता – डूबते समय उसने मेरी तरफ इशारा किया और कहा तुम्हारी वजह से हुआ है। 😜😛🤓 😎🤠😂😀",
  "बंता – सुना है तेरे घर वाले बहुत अच्छे हैं, संता – हाँ, उन्होंने तो मुझे अपनी बेटी के जैसे समझा है, अभी तक तो मुझे बेटी के अलावा कुछ नहीं समझा। 😜😛🤓 😎🤠😂😀",
  "संता – तेरी बीवी कैसी है? बंता – उसके साथ रह लो, क्या पता कभी तो सच मिल जाए। 😜😛🤓 😎🤠😂😀",
  "पति – तुम्हारे लिए आई साड़ी ख़रीदी है, पत्नी – वाह, कितनी प्यारी और सस्ती साड़ी है। पति – तूम अब अच्छे से देखो, तुम्हारी मात्रा चली गई है। 😜😛🤓 😎🤠😂😀",
  "संता – तुम्हारे घर वाले क्या कहते हैं तुम्हें शादी के बाद भी काम करने के लिए? बंता – बच्चा, उनको कोई फर्क नहीं पड़ता कि किस नौकरानी की दूकान पर काम करता हूँ। 😜😛🤓 😎🤠😂😀",
  "पप्पू – तेरे पास तो बहुत अच्छी वाइफ़ है, वो रोज तेरी टाइट टाइट गले की घंटियाँ बजाती है, तुझे नहीं लगता की वो तेरे लिए प्यार से कहीं रिमाइंडर का काम कर रही है। 😜😛🤓 😎🤠😂😀",
  "संता – क्या तू बच्चों को डिस्को में क्यों ले जाता है? बंता – क्योंकि यहाँ अब दिमाग़ नहीं, डांस होता है। 😜😛🤓 😎🤠😂😀",
  "पति – तुम्हारे बिना मैं मर जाऊँगा। पत्नी – मौत की बातें न करो, वैसे भी मैं उठा लेती हूँ, तुम्हें तो लेटना बहुत पसंद है। 😜😛🤓 😎🤠😂😀",
  "बंता – क्या हुआ संता, बड़ी परेशान लग रही हो? संता – हाँ, इस बार मैंने बच्चों को बड़े पाई में बनाने का इरादा किया था, पर मिडिल और छोटी पाई में बन गए। 😜😛🤓 😎🤠😂😀",
  "संता – तेरे पास इतना बड़ा घर है, फिर भी तू रेंट पर क्यों रहता है? बंता – यार उसमें बहुत बड़ी तकलीफ़ है। संता – कैसी? बंता – वहाँ बाहर से आती ही नहीं। 😜😛🤓 😎🤠😂😀",
  "पति – बीवी बड़ी अजीब बातें करती है, जब भी गुस्सा आता है तो तोती के बच्चे की तरह बोलने लगती है। पत्नी – और तुम, गुस्से में तो अपनी माँ के बच्चे ही लगते हो। 😜😛🤓 😎🤠😂😀",
  "संता – बंता, तू पत्नी को तोफ़ा क्यों नहीं देता? बंता – क्योंकि वह प्यार से दे लेती है। संता – फिर तो मुझे तोफ़ा क्यों देता है? बंता – तू उसे खुद बदनाम कर चुका है, इसलिए तो। 😜😛🤓 😎🤠😂😀",
  "पति – आज मुझे एक तोहफ़ा मिला, पत्नी – क्या? पति – वह जादू की झाड़ी, जिससे तू मेरे रिश्ते साफ कर सकती है। 😜😛🤓 😎🤠😂😀",
  "संता – भैया, ये चश्मा बहुत अच्छा है, कितने में देते हो? दुकानदार – सो सौ रुपये। संता – क्या, इतना महंगा, कम से कम चालीस में तो दो। 😜😛🤓 😎🤠😂😀",
  "बंता – संता तुझे लड़कियों में रोमांस क्यों नहीं करना चाहिए? संता – क्योंकि मेरे पास वो है, जिसके साथ रोमांस करने की मेरी लाइसेंस कट चुकी है। 😜😛🤓 😎🤠😂😀",
  "बंता – तूने इंग्लिश के लिए एक हज़ार रुपये दिए हैं, ये लेकिन तेरे लिए काम करने के लिए हैं। संता – ये क्या, मैंने तो तोहफ़े की तरह दिए थे। 😜😛🤓 😎🤠😂😀",
  "संता – बंता, मुझे एक मिलियन लाख का इंशुरेंस कराना है, तूने कराया है क्या? बंता – हाँ, दो साल पहले मुझे इंशुरेंस करवाया था। संता – तो फिर? बंता – वो कंपनी अब हमें भी इंशुरेंस नहीं कर रही है। 😜😛🤓 😎🤠😂😀",
  "संता – तेरी बीवी के साथ जब तू बाज़ार जाता है, तो लोग क्यों आलू ले लेते हैं? बंता – क्योंकि अब बीवी ने आलू के बाजार भी खोल लिए हैं। 😜😛🤓 😎🤠😂😀",
  "संता – मैं ने तो बीवी से शादी की थी, लेकिन मेरे बच्चो ने मेरी बड़ी ही अच्छे से धरा धर रिश्तेदारी की है। बंता – तो क्या हुआ, तेरे बच्चे तो अपने मम्मी के साथ रह रहे हैं। 😜😛🤓 😎🤠😂😀",
  "संता – तूने क्या सोचा, कैसे बचेगा मेरा बाप? बंता – तूने बेटा पैदा कर लिया है क्या? संता – नहीं तो, तू कैसे बचेगा? 😜😛🤓 😎🤠😂😀",
  "पति – जब तुम गुस्से में होती हो तो तुम बहुत खूबसूरत लगती हो। पत्नी – क्यों? पति – क्योंकि तब तुम्हें अपनी बात मनवाने के लिए चेहरा ही चेहरा होता है। 😜😛🤓 😎🤠😂😀",
  "संता – यार लड़कियों की तो कोई इज़्ज़त ही नहीं, एक लड़की तो फिर भी बहुत आज़माई गई है। बंता – कैसे? संता – उसने अपना पुराना घर कोठे में बिकवा दिया है और दिखावट के लिए सोने का ताज पहन रखा है। 😜😛🤓 😎🤠😂😀",
  "पति – क्या मैं अच्छा दिखता हूँ? पत्नी – लो ये मिरर। पति – क्यों? पत्नी – क्योंकि मेरा मिरर तुम्हारे सामने नहीं रहता। 😜😛🤓 😎🤠😂😀",
  "संता – क्या लड़कियों में दिमाग़ होता है? बंता – नहीं, बस अपने ड्रेस को कम दिमाग़ से धुँआ देती हैं। 😜😛🤓 😎🤠😂😀",
  "संता – तेरी बीवी तो खूबसूरत है, लेकिन बहुत खड़ूस है। बंता – ऐसी क्यों? संता – अबे उसने तुझे तो अपना तूफ़ान बताया है, जबकि तुझमें तो तूफ़ान की भी खासियत ही नहीं है। 😜😛🤓 😎🤠😂😀",
  "संता – क्या किसी लड़की को मैं रिंग गिफ्ट करूँ? बंता – हां, अगर तू अपनी खुद की शादी के कुछ साल बाद अपनी बीवी से रिंग मांगता है तो। 😜😛🤓 😎🤠😂😀",
  "संता – यार मेरी शादी के बाद तो मैंने अपने दोस्तों से बिलकुल बात नहीं की। बंता – क्यों? संता – क्योंकि उन्हें मुझसे कुछ कहने की आज़ादी नहीं थी। 😜😛🤓 😎🤠😂😀",
  "संता – तेरी बीवी तो तुझसे बड़ी है और उसका हमेशा सिर पे टावेल बैठा हुआ रहता है, क्या तू उसका चमक रहा है? बंता – हां, लेकिन अभी तक दिस्कवरी नहीं हो पाई है। 😜😛🤓 😎🤠😂😀",
  "पति – बीवी, तुम मुझे बहुत प्यार करती हो? पत्नी – हां, बहुत ज्यादा। पति – क्या दिखावटी जगह के लिए? पत्नी – तुम्हारे लिए तो सब कुछ। पति – फिर तो मेरी बाइक बहुत जल्द ही ठीक हो जाएगी। 😜😛🤓 😎🤠😂😀",
  "संता – यार अगर मैं अमीर होता तो बहुत अच्छा होता, तू भी देख लेता। बंता – क्यों, तू कबर के ख़ज़ाने को हराम माल मानता है क्या? 😜😛🤓 😎🤠😂😀",
  "संता – यार अगर मैं ब्रह्माणंड का राजा होता तो सब लड़कियाँ मेरी फैन होतीं। बंता – वैसे तो मर्द का लिंग ब्रह्माणंड ही कहलाता है, पर तेरा तो विलुप्त हो गया। 😜😛🤓 😎🤠😂😀",
  "पति – आज कुछ ख़ास बनाऊं? पत्नी – क्यों? पति – बस ऐसे ही। पत्नी – क्योंकि आज तेरा ख़ास कुछ नहीं चलेगा। 😜😛🤓 😎🤠😂😀",
  "संता – तू क्या वह लड़की नहीं थी जिसके साथ तूने कल बात की थी? बंता – हां, लेकिन उसने मुझसे अच्छी तरह बात नहीं की। संता – क्या कहा? बंता – हाँ तू भी नहीं रहा। 😜😛🤓 😎🤠😂😀",
  "पति – तुम्हारी तो कितनी ख़ुशियाँ हैं मेरे साथ, पत्नी – और तुम्हारी तो कोई लक्ष्य ही नहीं। 😜😛🤓 😎🤠😂😀",
  "संता – तू तो बहुत अच्छा लिखता है, क्या तू उससे पैसे कमाता है? बंता – हां, लेकिन तेरी तरह मुझे तो फ़ैल होने का इतना समय नहीं मिलता। 😜😛🤓 😎🤠😂😀",
  "संता – तू अपने प्यार में कितना गहरा गया है, अगर तेरी गर्लफ़्रेंड तुझसे ब्रेकअप कर दे तो क्या करोगा? बंता – जल्दी से नई गर्लफ़्रेंड बनाऊंगा। संता – फिर? बंता – फिर वो भी ब्रेकअप करेगी, तब तक अच्छा बिज़नेस हो जाएगा। 😜😛🤓 😎🤠😂😀",
  "पति – क्या मुझसे शादी करोगी? पत्नी – क्या तुम मुझसे सच सच प्यार करते हो? पति – हां, लेकिन विवाद में तुम किसी और की ओर मुड़ती हो। पत्नी – तो क्या हुआ, मुझे भी किसी के साथ रहने का हक़ तो है। 😜😛🤓 😎🤠😂😀",
  "बंता – तूने क्या किया अपनी बीवी को तोफ़ा देने का? संता – हाँ, उसने तो मेरा पूरा ख़ाना खा लिया। बंता – लेकिन तूने तो अपने पापा को भी तोफ़ा दिया था, क्या उन्होंने भी? संता – हाँ, उन्होंने तो भाग लिया था। 😜😛🤓 😎🤠😂😀"][random]
export default jokes;