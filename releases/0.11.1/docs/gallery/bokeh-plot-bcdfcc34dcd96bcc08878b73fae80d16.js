
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("828daccc-7f0b-4295-b722-14de51d48c1a");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '828daccc-7f0b-4295-b722-14de51d48c1a' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"99b6f2b4-3595-4eb8-bf1e-68a442df6482":{"roots":{"references":[{"attributes":{"data_source":{"id":"f0e1fa15-12c8-4964-bb2c-7af1ab2e7286","type":"ColumnDataSource"},"glyph":{"id":"aaace300-993d-4356-818d-11549d158b01","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1e384298-0270-4f25-a3f4-070f9e6b0054","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"}},"id":"08353eaa-3951-4069-bd54-695cf371a6a7","type":"ResetTool"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"11.000000pt"},"formatter":{"id":"2ff150e1-9737-41f5-9f65-4eb5943a9689","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"10.000000pt"},"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"},"ticker":{"id":"40643626-9b26-4280-80ac-80d59c5e320f","type":"BasicTicker"}},"id":"c56dfd5f-0381-402a-8756-913db3ee65ed","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[2.0,2.0],"Series 1":[0.4805573158397671,1.261612123637839]}},"id":"eb8f459d-493e-466a-ba7a-4ddb9d4d2f4d","type":"ColumnDataSource"},{"attributes":{},"id":"23c4e827-9ae6-47ab-b6dd-96c3af743b1a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[3.0,3.0],"Series 1":[0.6599630887895656,1.4217916565708881]}},"id":"8a6a62c2-bb11-4fd4-85d1-f3bfa9e0ed08","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[8.0,8.0],"Series 1":[-1.2916481492737253,-0.4950250213976629]}},"id":"cf6e7388-5345-4b54-a160-4a3a567ce28c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[18.0,18.0],"Series 1":[0.12717115364320183,0.8292686663430657]}},"id":"1015d056-4931-4ff6-b21d-f6c1003f7522","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"32a40f59-8445-4d48-aea9-a279014b8768","type":"Line"},{"attributes":{"data_source":{"id":"66b00016-8d97-42b3-bf1a-4370a0fdbac4","type":"ColumnDataSource"},"glyph":{"id":"d54f1310-be11-434e-83d5-9732010efae7","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3f22ecd6-9896-4802-8c89-b483ebfcdbf8","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"ba8086b5-3ff8-41ca-91a5-f0c2c56ff210","type":"Line"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[0.0,1.0,2.0,3.0,4.0,5.0,6.0,7.0,8.0,9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0],"Series 1":[-0.1718012235915726,0.39979543032374804,0.8683069559336696,1.0393071398817564,0.8093361308746815,0.5568783295866582,0.22719567747449182,-0.5107106490420683,-0.8918982694371227,-1.062121703812,-1.0055648608395216,-0.7958266412072068,-0.264421691496942,0.15519580104261693,0.5496264062001626,0.8676294027305694,0.8670853181073369,0.7366512589755623,0.4755740742833276,-0.06044722092044515,-0.6977345382154995,-0.8489627882017612,-1.1196715708091278,-1.0220009407843078,-0.6796169635142663,-0.19915574542366993,0.4332214766885504,0.7155677756572206,0.9538195561502267,0.8203262947261759,0.45217955772017976]}},"id":"d287d4b0-5e19-490c-80dc-ecd568b952ca","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"b36de47f-705b-4131-a032-53bc0d01205b","type":"Line"},{"attributes":{"data_source":{"id":"b2cc4a99-8fe9-432f-8822-c25c96d6ca79","type":"ColumnDataSource"},"glyph":{"id":"5e1f2bf0-6700-43e6-8590-6b71aa56f645","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4e120026-409a-4e20-a951-503e5bd48d8b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[22.0,22.0],"Series 1":[-1.4762190269868698,-0.7532809444549797]}},"id":"fd8ae850-d90e-4381-ab42-35f4de6f9a35","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"96c62a61-4a85-48f2-b6f0-09bc17264ab4","type":"Line"},{"attributes":{"overlay":{"id":"efa11cfd-0d7e-4ad6-af19-afecc1776670","type":"BoxAnnotation"},"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"}},"id":"92ba9bfd-41fe-49a5-a691-ee5ad28a3f5a","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[21.0,21.0],"Series 1":[-1.2089742606344815,-0.48267381607159193]}},"id":"b87e4060-f970-412b-b4ae-500ec1b9c68c","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"efa11cfd-0d7e-4ad6-af19-afecc1776670","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"694305a0-cad4-41c9-a141-0aa59d4b7f87","type":"ColumnDataSource"},"glyph":{"id":"e10ec850-5444-4490-bbb1-f8c0fd318dae","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3259ab63-eac3-4969-9416-bf49c403d29c","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"2c1958e5-aad8-45ee-a127-ab2a0661bb7f","type":"Line"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[24.0,24.0],"Series 1":[-1.0436793873685297,-0.31036578814348953]}},"id":"66b00016-8d97-42b3-bf1a-4370a0fdbac4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[4.0,4.0],"Series 1":[0.4542641266570757,1.1746790224267456]}},"id":"24f5b06b-e389-4ba2-975f-df5dc38fc2db","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"}},"id":"485904f8-d06d-4d91-ba11-5173d1b71999","type":"PanTool"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"33aa1015-0a53-416d-addd-0574ceedcba9","type":"Line"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[-1.0,-0.6767676767676767,-0.3535353535353535,-0.030303030303030276,0.29292929292929304,0.6161616161616164,0.9393939393939394,1.262626262626263,1.585858585858586,1.9090909090909092,2.2323232323232327,2.555555555555556,2.878787878787879,3.2020202020202024,3.525252525252526,3.8484848484848486,4.171717171717172,4.494949494949496,4.818181818181818,5.141414141414142,5.464646464646465,5.787878787878788,6.111111111111112,6.434343434343435,6.757575757575758,7.080808080808081,7.404040404040405,7.727272727272728,8.050505050505052,8.373737373737374,8.696969696969697,9.02020202020202,9.343434343434344,9.666666666666668,9.989898989898991,10.313131313131315,10.636363636363637,10.95959595959596,11.282828282828284,11.606060606060607,11.92929292929293,12.252525252525254,12.575757575757576,12.8989898989899,13.222222222222223,13.545454545454547,13.86868686868687,14.191919191919194,14.515151515151516,14.83838383838384,15.161616161616163,15.484848484848488,15.80808080808081,16.13131313131313,16.454545454545457,16.77777777777778,17.101010101010104,17.424242424242426,17.747474747474747,18.070707070707073,18.393939393939394,18.71717171717172,19.04040404040404,19.363636363636367,19.68686868686869,20.01010101010101,20.333333333333336,20.656565656565657,20.979797979797983,21.303030303030305,21.62626262626263,21.94949494949495,22.272727272727273,22.5959595959596,22.91919191919192,23.242424242424246,23.565656565656568,23.88888888888889,24.212121212121215,24.535353535353536,24.85858585858586,25.181818181818183,25.50505050505051,25.82828282828283,26.151515151515152,26.474747474747478,26.7979797979798,27.121212121212125,27.444444444444446,27.76767676767677,28.090909090909093,28.414141414141415,28.73737373737374,29.060606060606062,29.383838383838388,29.70707070707071,30.03030303030303,30.353535353535356,30.67676767676768,31.0],"Series 1":[-0.5262196466868351,-0.3809095507242701,-0.22739734201337175,-0.06954244086928764,0.08868655361454846,0.24331163733745714,0.39044541141199574,0.5263888144965547,0.6477241201706709,0.751400861324297,0.8348125213528147,0.8958620640795084,0.9330146549305782,0.9453362479099755,0.9325170682664998,0.8948794004800308,0.8333694857706618,0.7495337328338696,0.645479839882956,0.5238238054218655,0.3876241599401411,0.2403050719980706,0.08557026187684245,-0.07269011292625299,-0.23049725938408683,-0.38388377899442166,-0.5289934113671232,-0.6621779837099052,-0.7800891288246117,-0.879762465749889,-0.9586921266812265,-1.0148937565016976,-1.046954401064561,-1.0540680299961955,-1.0360558009475545,-0.9933705558345687,-0.9270854360284008,-0.8388669027188157,-0.730932840740424,-0.6059967991652769,-0.46719977049812855,-0.3180312236002392,-0.16224137563748503,-0.003746908606495493,0.1534674991988363,0.30544935120241884,0.4483777014867787,0.5786592164445755,0.6930185140736941,0.7885805097134304,0.8629426979837551,0.9142355537016263,0.9411695332467557,0.9430674947247162,0.9198817218584315,0.8721951236137357,0.8012065793994482,0.708700798275415,0.597003449932254,0.4689226954860334,0.3276785880507053,0.17682211801464415,0.020145938288120238,-0.1384109860392951,-0.2948624064470703,-0.4452750084755565,-0.5858672984129658,-0.7131046730867294,-0.8237882826282575,-0.915135452129762,-0.9848496403280742,-1.031178176497873,-1.0529563240024689,-1.0496365627090254,-1.021302354084776,-0.9686660429086569,-0.893050948351002,-0.796358094665962,-0.6810184179137718,-0.5499316502742888,-0.4063934184492785,-0.2540123889582213,-0.09661954336146628,0.06182813569539289,0.21734714620573936,0.36602761524419014,0.5041315963145541,0.628187044329204,0.735075105613289,0.8221085283929562,0.887099222464868,0.928413269542638,0.9450120012758334,0.936478112207157,0.9030261511670595,0.8454971273436956,0.7653373666359568,0.6645621498578593,0.5457050469590726,0.41175422103997317]}},"id":"b2cc4a99-8fe9-432f-8822-c25c96d6ca79","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[5.0,5.0],"Series 1":[0.18292446036869459,0.9304022565594698]}},"id":"0e42945e-c1f3-4624-872d-73c72313db37","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"5e1f2bf0-6700-43e6-8590-6b71aa56f645","type":"Line"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[16.0,16.0],"Series 1":[0.4818265082004219,1.2534228967056145]}},"id":"ac3b65c2-6cd0-4974-9ffa-3a7fc5ee2b11","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[14.0,14.0],"Series 1":[0.17270914832726386,0.9261475528546859]}},"id":"524bbdd5-b523-470f-a81f-2a7b841ac6c1","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"4d1c6986-d435-4e8c-8004-09c4a8ad99fe","type":"Line"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"aaace300-993d-4356-818d-11549d158b01","type":"Line"},{"attributes":{},"id":"cd60584d-f114-4a88-91b9-44a21f608b41","type":"X"},{"attributes":{"data_source":{"id":"e4349916-5534-44ff-a7fc-8024ef17b157","type":"ColumnDataSource"},"glyph":{"id":"e6c06e6d-5607-464d-bac2-6a0c438609bb","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"26a81ce1-199a-4900-9b57-959e0096e144","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"524bbdd5-b523-470f-a81f-2a7b841ac6c1","type":"ColumnDataSource"},"glyph":{"id":"9c101940-add0-400a-bb9e-a1114a4b4660","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"48a1ff81-201a-4933-b475-d616680ee69e","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"bf07c9cb-2196-45e2-b166-accec1691c04","type":"Line"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[11.0,11.0],"Series 1":[-1.1541072883187524,-0.43004010970139606]}},"id":"b282e468-d4f1-4e86-91c9-d057d27df002","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"59fdcdf3-2843-4f78-b37b-8c75cd71fec2","type":"Line"},{"attributes":{"fill_color":{"value":"#66C2A5"},"line_color":{"value":"#000000"},"line_width":{"value":0.0},"size":{"units":"screen","value":7.0},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"c218df5e-7624-4638-80f1-9f5bd1ebe3b3","type":"Circle"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"dbc1ac73-6529-4b9a-aa07-c2f64b423017","type":"Line"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"0906c17c-b3a6-45c5-9f09-9983605e1a9f","type":"Line"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"4b9911c3-331c-4dd5-8478-ad954d90fe10","type":"Line"},{"attributes":{"data_source":{"id":"7db40e09-44f5-4f1d-8145-58700134ce7b","type":"ColumnDataSource"},"glyph":{"id":"bca05579-817c-45b2-a43c-06fc10ffeafa","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"efc6a148-32ad-4fe3-945f-39e8812c466e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[0.0,0.0],"Series 1":[-0.533704426420612,0.19988543732034805]}},"id":"82739d02-448f-4258-b188-1513f15249c0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[20.0,20.0],"Series 1":[-1.0773850234559208,-0.307999924289055]}},"id":"a62f0af9-678e-4aff-bf4b-2380062e0703","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b0c18c55-a55b-4ad5-924f-4b3046c791ac","type":"ColumnDataSource"},"glyph":{"id":"96c62a61-4a85-48f2-b6f0-09bc17264ab4","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4dc9e251-1bb6-4b4b-9532-65955be93d0e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[25.0,25.0],"Series 1":[-0.5701131980750731,0.180218331933316]}},"id":"e4349916-5534-44ff-a7fc-8024ef17b157","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[28.0,28.0],"Series 1":[0.5946783578296153,1.3199109008058107]}},"id":"807fae66-efc9-4548-b399-c1be046fb4ec","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["name"],"data":{"name":"ax_end"}},"id":"4e24c862-e201-49ff-981e-5dc250e6fd8d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d287d4b0-5e19-490c-80dc-ecd568b952ca","type":"ColumnDataSource"},"glyph":{"id":"c218df5e-7624-4638-80f1-9f5bd1ebe3b3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d13ba8db-5cc7-4d6b-adf5-9bf6d14028ca","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4cf6ef5b-8161-4a4c-abfd-c6bb717225a0","type":"ColumnDataSource"},"glyph":{"id":"bf07c9cb-2196-45e2-b166-accec1691c04","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4dfbce05-0c9f-4816-8a5e-7659aaba996b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"807fae66-efc9-4548-b399-c1be046fb4ec","type":"ColumnDataSource"},"glyph":{"id":"543f9610-2459-4e91-a09c-6bcc21a549d4","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7dbee5b1-415a-4753-a29a-9812074241d2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"93f58b65-c3a0-4620-a97d-a6f543ebf2f0","type":"ColumnDataSource"},"glyph":{"id":"ba8086b5-3ff8-41ca-91a5-f0c2c56ff210","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5a969a7c-cad5-4389-b601-ad74aca89d33","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1f096d04-9c68-45e6-9989-454ae23697d4","type":"ColumnDataSource"},"glyph":{"id":"b36de47f-705b-4131-a032-53bc0d01205b","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"90b280b0-ac64-49fe-9a56-85fa787fdce0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4e24c862-e201-49ff-981e-5dc250e6fd8d","type":"ColumnDataSource"},"glyph":{"id":"cd60584d-f114-4a88-91b9-44a21f608b41","type":"X"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"048a9be5-d0dd-4728-96cd-1984e2ae43f0","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"d54f1310-be11-434e-83d5-9732010efae7","type":"Line"},{"attributes":{},"id":"6280c113-af05-4260-b38d-b36d6fa8febf","type":"ToolEvents"},{"attributes":{"callback":null},"id":"28baaf0b-a7c9-49c4-a4ef-19834ff06924","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"543f9610-2459-4e91-a09c-6bcc21a549d4","type":"Line"},{"attributes":{"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"}},"id":"df834d4a-23e0-4a60-91cc-224ac46895f4","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[10.0,10.0],"Series 1":[-1.3828311227930121,-0.632860390531575]}},"id":"35070e5e-58c1-441e-b048-a95e329369aa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35070e5e-58c1-441e-b048-a95e329369aa","type":"ColumnDataSource"},"glyph":{"id":"32a40f59-8445-4d48-aea9-a279014b8768","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d8eef643-f046-4494-8e74-ca4d37beb422","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"}},"id":"2cb87af5-8caa-4264-a98c-e3d57ada9826","type":"PreviewSaveTool"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[9.0,9.0],"Series 1":[-1.4575014814732568,-0.6608665696631767]}},"id":"7329874a-220f-4b99-88a3-4402116a2b9e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[6.0,6.0],"Series 1":[-0.13997134738556474,0.5995469638477386]}},"id":"f0e1fa15-12c8-4964-bb2c-7af1ab2e7286","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"cf6e7388-5345-4b54-a160-4a3a567ce28c","type":"ColumnDataSource"},"glyph":{"id":"2c1958e5-aad8-45ee-a127-ab2a0661bb7f","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c968e57f-b452-425b-a552-bbdf4a8d9e75","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[30.0,30.0],"Series 1":[0.05569448025241421,0.8492707188782134]}},"id":"b0c18c55-a55b-4ad5-924f-4b3046c791ac","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"e70f02c4-53b7-44d4-8186-c7dfad831774","type":"Line"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"bca05579-817c-45b2-a43c-06fc10ffeafa","type":"Line"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[26.0,26.0],"Series 1":[0.037470902956523916,0.828353090824318]}},"id":"b484574f-14e6-4418-a9c8-f8701b8d29b1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7329874a-220f-4b99-88a3-4402116a2b9e","type":"ColumnDataSource"},"glyph":{"id":"810e9a85-ff9a-434e-8659-7ccdb2984934","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1636a8e5-e49b-4702-bf92-0a55170c78d9","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":"white"},"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"},"ticker":{"id":"7e9bb375-34af-4c67-ace5-d696de311cc0","type":"BasicTicker"}},"id":"6ba18221-c3a4-4e8f-9565-08839483ac3a","type":"Grid"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[1.0,1.0],"Series 1":[0.05139249833117735,0.7531665676931435]}},"id":"a139eea8-de69-4e26-8e64-2d54415e6fd2","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bc5893ec-06f8-4a00-a2ec-a901a3add6e1","type":"ColumnDataSource"},"glyph":{"id":"ddae2bb1-2cf0-4349-b090-3b054c756f82","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"42fe51b3-76cc-499b-b8cb-caa59f54ce77","type":"GlyphRenderer"},{"attributes":{},"id":"7e9bb375-34af-4c67-ace5-d696de311cc0","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"c13a8cc3-8363-44e7-aaf6-e54481a607e4","type":"Line"},{"attributes":{"background_fill_color":{"value":"#EAEAF2"},"below":[{"id":"3a79d1bc-2d5d-4664-acbc-e244163ad618","type":"LinearAxis"}],"left":[{"id":"c56dfd5f-0381-402a-8756-913db3ee65ed","type":"LinearAxis"}],"plot_height":440,"plot_width":640,"renderers":[{"id":"3a79d1bc-2d5d-4664-acbc-e244163ad618","type":"LinearAxis"},{"id":"6ba18221-c3a4-4e8f-9565-08839483ac3a","type":"Grid"},{"id":"c56dfd5f-0381-402a-8756-913db3ee65ed","type":"LinearAxis"},{"id":"35515e9b-a958-454f-8e38-f7db54bd338d","type":"Grid"},{"id":"048a9be5-d0dd-4728-96cd-1984e2ae43f0","type":"GlyphRenderer"},{"id":"efa11cfd-0d7e-4ad6-af19-afecc1776670","type":"BoxAnnotation"},{"id":"c1a2fcd6-e263-48ca-923d-dc6500bb54d6","type":"GlyphRenderer"},{"id":"46ad694b-a96f-4080-9ed6-50a2165bbe67","type":"GlyphRenderer"},{"id":"9b62c5bd-7f59-454c-adc2-1c4d545c7fd9","type":"GlyphRenderer"},{"id":"a93711da-09d6-4a48-b528-accf6572e035","type":"GlyphRenderer"},{"id":"7d3abe1b-286e-41c4-8516-78d3af9a44f9","type":"GlyphRenderer"},{"id":"982885e8-a02d-4df4-948b-feccee63be78","type":"GlyphRenderer"},{"id":"1e384298-0270-4f25-a3f4-070f9e6b0054","type":"GlyphRenderer"},{"id":"13484381-0b73-403a-b54d-18a056aba312","type":"GlyphRenderer"},{"id":"c968e57f-b452-425b-a552-bbdf4a8d9e75","type":"GlyphRenderer"},{"id":"1636a8e5-e49b-4702-bf92-0a55170c78d9","type":"GlyphRenderer"},{"id":"d8eef643-f046-4494-8e74-ca4d37beb422","type":"GlyphRenderer"},{"id":"b6bc9264-382b-48d0-83d0-3f328a43cc49","type":"GlyphRenderer"},{"id":"4dfbce05-0c9f-4816-8a5e-7659aaba996b","type":"GlyphRenderer"},{"id":"b249b65f-9939-4dec-a27e-b606f2de40d1","type":"GlyphRenderer"},{"id":"48a1ff81-201a-4933-b475-d616680ee69e","type":"GlyphRenderer"},{"id":"efc6a148-32ad-4fe3-945f-39e8812c466e","type":"GlyphRenderer"},{"id":"54de73ea-7fb6-40e5-a4e9-9af436fa162a","type":"GlyphRenderer"},{"id":"42fe51b3-76cc-499b-b8cb-caa59f54ce77","type":"GlyphRenderer"},{"id":"2680fc94-b44a-41d2-858a-03ccc9e91349","type":"GlyphRenderer"},{"id":"90b280b0-ac64-49fe-9a56-85fa787fdce0","type":"GlyphRenderer"},{"id":"d7ab3f48-7621-491b-987e-32db38a8e78c","type":"GlyphRenderer"},{"id":"0a982499-9ce3-43e8-b95e-d8f1cb871bd5","type":"GlyphRenderer"},{"id":"db3f45f8-53c2-4f98-b4cb-d31150da08a0","type":"GlyphRenderer"},{"id":"3259ab63-eac3-4969-9416-bf49c403d29c","type":"GlyphRenderer"},{"id":"3f22ecd6-9896-4802-8c89-b483ebfcdbf8","type":"GlyphRenderer"},{"id":"26a81ce1-199a-4900-9b57-959e0096e144","type":"GlyphRenderer"},{"id":"02a1d644-6bdf-47cf-aea2-890ba0ae564a","type":"GlyphRenderer"},{"id":"5a969a7c-cad5-4389-b601-ad74aca89d33","type":"GlyphRenderer"},{"id":"7dbee5b1-415a-4753-a29a-9812074241d2","type":"GlyphRenderer"},{"id":"f063793d-d415-4531-ac33-82051a15bef7","type":"GlyphRenderer"},{"id":"4dc9e251-1bb6-4b4b-9532-65955be93d0e","type":"GlyphRenderer"},{"id":"d13ba8db-5cc7-4d6b-adf5-9bf6d14028ca","type":"GlyphRenderer"},{"id":"4e120026-409a-4e20-a951-503e5bd48d8b","type":"GlyphRenderer"}],"title":"Seaborn tsplot with CI in bokeh.","tool_events":{"id":"6280c113-af05-4260-b38d-b36d6fa8febf","type":"ToolEvents"},"tools":[{"id":"485904f8-d06d-4d91-ba11-5173d1b71999","type":"PanTool"},{"id":"df834d4a-23e0-4a60-91cc-224ac46895f4","type":"WheelZoomTool"},{"id":"92ba9bfd-41fe-49a5-a691-ee5ad28a3f5a","type":"BoxZoomTool"},{"id":"2cb87af5-8caa-4264-a98c-e3d57ada9826","type":"PreviewSaveTool"},{"id":"7028e17f-dc53-407e-a0d4-578f18c6ad9e","type":"ResizeTool"},{"id":"08353eaa-3951-4069-bd54-695cf371a6a7","type":"ResetTool"},{"id":"016c5111-bf9e-4ea3-a2cb-2f74a61c4d80","type":"HelpTool"}],"x_range":{"id":"c338c24b-eff8-49a6-920f-9ed1ac628d7d","type":"DataRange1d"},"y_range":{"id":"28baaf0b-a7c9-49c4-a4ef-19834ff06924","type":"DataRange1d"}},"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[13.0,13.0],"Series 1":[-0.2316313191932158,0.5534215520316215]}},"id":"005d700b-dc72-4afd-bc79-37a84bc82241","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"19c87882-57cc-416d-9ccc-2d06aae4a83c","type":"Line"},{"attributes":{"data_source":{"id":"24f5b06b-e389-4ba2-975f-df5dc38fc2db","type":"ColumnDataSource"},"glyph":{"id":"19c87882-57cc-416d-9ccc-2d06aae4a83c","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7d3abe1b-286e-41c4-8516-78d3af9a44f9","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"78c19da3-c5cf-4061-be12-a91591c75553","type":"Line"},{"attributes":{},"id":"2ff150e1-9737-41f5-9f65-4eb5943a9689","type":"BasicTickFormatter"},{"attributes":{},"id":"40643626-9b26-4280-80ac-80d59c5e320f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ac3b65c2-6cd0-4974-9ffa-3a7fc5ee2b11","type":"ColumnDataSource"},"glyph":{"id":"4750cbc9-a7e5-49bb-a9a4-901b59a27b98","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"54de73ea-7fb6-40e5-a4e9-9af436fa162a","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"27863042-1d65-4c63-8682-4d97239e0054","type":"Line"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[19.0,19.0],"Series 1":[-0.4055355447633769,0.28460974004745027]}},"id":"1f096d04-9c68-45e6-9989-454ae23697d4","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"4750cbc9-a7e5-49bb-a9a4-901b59a27b98","type":"Line"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"11.000000pt"},"formatter":{"id":"23c4e827-9ae6-47ab-b6dd-96c3af743b1a","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"10.000000pt"},"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"},"ticker":{"id":"7e9bb375-34af-4c67-ace5-d696de311cc0","type":"BasicTicker"}},"id":"3a79d1bc-2d5d-4664-acbc-e244163ad618","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[29.0,29.0],"Series 1":[0.4456086815772064,1.20615658870079]}},"id":"d63995a4-b2ca-4579-86df-0339530be2fc","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[23.0,23.0],"Series 1":[-1.3655330549797389,-0.6769849498418533]}},"id":"694305a0-cad4-41c9-a141-0aa59d4b7f87","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[17.0,17.0],"Series 1":[0.3794643775416968,1.09256274512066]}},"id":"bc5893ec-06f8-4a00-a2ec-a901a3add6e1","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d63995a4-b2ca-4579-86df-0339530be2fc","type":"ColumnDataSource"},"glyph":{"id":"b7ea72a9-cf0e-446a-bfc6-e269328065f0","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f063793d-d415-4531-ac33-82051a15bef7","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"ddae2bb1-2cf0-4349-b090-3b054c756f82","type":"Line"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"b7ea72a9-cf0e-446a-bfc6-e269328065f0","type":"Line"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"},"ticker":{"id":"40643626-9b26-4280-80ac-80d59c5e320f","type":"BasicTicker"}},"id":"35515e9b-a958-454f-8e38-f7db54bd338d","type":"Grid"},{"attributes":{"data_source":{"id":"1015d056-4931-4ff6-b21d-f6c1003f7522","type":"ColumnDataSource"},"glyph":{"id":"78c19da3-c5cf-4061-be12-a91591c75553","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2680fc94-b44a-41d2-858a-03ccc9e91349","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"6fb957ba-6a89-4f65-b0da-06a566a1705f","type":"Line"},{"attributes":{"data_source":{"id":"005d700b-dc72-4afd-bc79-37a84bc82241","type":"ColumnDataSource"},"glyph":{"id":"4d1c6986-d435-4e8c-8004-09c4a8ad99fe","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b249b65f-9939-4dec-a27e-b606f2de40d1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b484574f-14e6-4418-a9c8-f8701b8d29b1","type":"ColumnDataSource"},"glyph":{"id":"c13a8cc3-8363-44e7-aaf6-e54481a607e4","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"02a1d644-6bdf-47cf-aea2-890ba0ae564a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"eb8f459d-493e-466a-ba7a-4ddb9d4d2f4d","type":"ColumnDataSource"},"glyph":{"id":"4a4b38b3-a345-4a6b-9043-b331f88e8e86","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9b62c5bd-7f59-454c-adc2-1c4d545c7fd9","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"810e9a85-ff9a-434e-8659-7ccdb2984934","type":"Line"},{"attributes":{"data_source":{"id":"0e42945e-c1f3-4624-872d-73c72313db37","type":"ColumnDataSource"},"glyph":{"id":"dbc1ac73-6529-4b9a-aa07-c2f64b423017","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"982885e8-a02d-4df4-948b-feccee63be78","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[27.0,27.0],"Series 1":[0.34908927277479634,1.0844296569680842]}},"id":"93f58b65-c3a0-4620-a97d-a6f543ebf2f0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b87e4060-f970-412b-b4ae-500ec1b9c68c","type":"ColumnDataSource"},"glyph":{"id":"0906c17c-b3a6-45c5-9f09-9983605e1a9f","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0a982499-9ce3-43e8-b95e-d8f1cb871bd5","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"9c101940-add0-400a-bb9e-a1114a4b4660","type":"Line"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[15.0,15.0],"Series 1":[0.5074296226667251,1.234065836137645]}},"id":"7db40e09-44f5-4f1d-8145-58700134ce7b","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"4a4b38b3-a345-4a6b-9043-b331f88e8e86","type":"Line"},{"attributes":{"data_source":{"id":"82739d02-448f-4258-b188-1513f15249c0","type":"ColumnDataSource"},"glyph":{"id":"ea442af8-0a87-4fa2-a1d4-fe0ff34fc1a0","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c1a2fcd6-e263-48ca-923d-dc6500bb54d6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a62f0af9-678e-4aff-bf4b-2380062e0703","type":"ColumnDataSource"},"glyph":{"id":"27863042-1d65-4c63-8682-4d97239e0054","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d7ab3f48-7621-491b-987e-32db38a8e78c","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"ea442af8-0a87-4fa2-a1d4-fe0ff34fc1a0","type":"Line"},{"attributes":{"data_source":{"id":"9cff4d05-2adc-42ed-a6aa-72f718a6b9ad","type":"ColumnDataSource"},"glyph":{"id":"6fb957ba-6a89-4f65-b0da-06a566a1705f","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"13484381-0b73-403a-b54d-18a056aba312","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"}},"id":"016c5111-bf9e-4ea3-a2cb-2f74a61c4d80","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[7.0,7.0],"Series 1":[-0.8768406300154445,-0.1444955741305389]}},"id":"9cff4d05-2adc-42ed-a6aa-72f718a6b9ad","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"c338c24b-eff8-49a6-920f-9ed1ac628d7d","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"e6c06e6d-5607-464d-bac2-6a0c438609bb","type":"Line"},{"attributes":{"plot":{"id":"cc641922-8289-4d1a-8231-746718fb14b8","type":"Plot"}},"id":"7028e17f-dc53-407e-a0d4-578f18c6ad9e","type":"ResizeTool"},{"attributes":{"data_source":{"id":"8a6a62c2-bb11-4fd4-85d1-f3bfa9e0ed08","type":"ColumnDataSource"},"glyph":{"id":"33aa1015-0a53-416d-addd-0574ceedcba9","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a93711da-09d6-4a48-b528-accf6572e035","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a139eea8-de69-4e26-8e64-2d54415e6fd2","type":"ColumnDataSource"},"glyph":{"id":"e70f02c4-53b7-44d4-8186-c7dfad831774","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"46ad694b-a96f-4080-9ed6-50a2165bbe67","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[12.0,12.0],"Series 1":[-0.6586009793825047,0.1324010227977227]}},"id":"4cf6ef5b-8161-4a4c-abfd-c6bb717225a0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fd8ae850-d90e-4381-ab42-35f4de6f9a35","type":"ColumnDataSource"},"glyph":{"id":"4b9911c3-331c-4dd5-8478-ad954d90fe10","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"db3f45f8-53c2-4f98-b4cb-d31150da08a0","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#66C2A5"},"line_width":{"value":1.75},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"e10ec850-5444-4490-bbb1-f8c0fd318dae","type":"Line"},{"attributes":{"data_source":{"id":"b282e468-d4f1-4e86-91c9-d057d27df002","type":"ColumnDataSource"},"glyph":{"id":"59fdcdf3-2843-4f78-b37b-8c75cd71fec2","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b6bc9264-382b-48d0-83d0-3f328a43cc49","type":"GlyphRenderer"}],"root_ids":["cc641922-8289-4d1a-8231-746718fb14b8"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"99b6f2b4-3595-4eb8-bf1e-68a442df6482","elementid":"828daccc-7f0b-4295-b722-14de51d48c1a","modelid":"cc641922-8289-4d1a-8231-746718fb14b8"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));