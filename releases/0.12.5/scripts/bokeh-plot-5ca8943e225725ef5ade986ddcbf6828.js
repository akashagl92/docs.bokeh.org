(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("335d966b-1079-4281-a1b2-e952dd88b295");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '335d966b-1079-4281-a1b2-e952dd88b295' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"20b1e62b-8656-4a25-8728-7797536c6af7":{"roots":{"references":[{"attributes":{"axis_label":"Mpg","formatter":{"id":"3e16c9af-ea8a-4466-936c-b30714485f96","type":"BasicTickFormatter"},"plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"},"ticker":{"id":"7932f154-b86f-4226-93cb-325b9e6190b4","type":"BasicTicker"}},"id":"a10dcc7f-41fe-4187-a9db-8e1655a6e815","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"011d1124-277c-43d6-9b44-2c928caea534","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":{"__ndarray__":"AAAAAAAAN0BmZmZmZuY3QJqZmZmZmTpA","dtype":"float64","shape":[3]}}},"id":"dc9a4c8a-af1e-4702-86ee-f5a83c7fbd5c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"827cee45-a0ca-4cb4-af22-70294b4bf6d4","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ae78620-796d-4af6-86ae-14946b465c42","type":"Rect"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"42f360fb-031c-4e5b-97b7-70f1ee1fc779","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c028e2da-a16e-4a21-b1a4-481125058750","type":"Rect"},{"attributes":{"plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"}},"id":"7da45a41-12fa-488a-a476-1f928cf8f1a1","type":"PanTool"},{"attributes":{"data_source":{"id":"c2d80c7e-2f1d-4c5c-8097-95bb25886e98","type":"ColumnDataSource"},"glyph":{"id":"42f360fb-031c-4e5b-97b7-70f1ee1fc779","type":"Segment"},"hover_glyph":null,"muted_glyph":null},"id":"e665a27d-2395-4b8b-b770-5db061d7ada7","type":"GlyphRenderer"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"f2b69943-fa81-4010-9954-bc0e3624d796","type":"GlyphRenderer"},{"id":"f1c0a150-1eaf-47af-a903-4ddcc1926948","type":"GlyphRenderer"},{"id":"4339047f-14e9-46e6-bba8-664d67c82d4f","type":"GlyphRenderer"},{"id":"ab6b9a31-65d5-448e-b90e-2644214b9c90","type":"GlyphRenderer"}]},"id":"4a3ae8d5-f9e7-481a-aebb-d64f34eb6b21","type":"LegendItem"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"db606de6-7c06-447d-997d-5da775f1e801","type":"GlyphRenderer"},{"id":"7eda7a29-7f95-4fdf-a87f-1b5b7a289580","type":"GlyphRenderer"},{"id":"e665a27d-2395-4b8b-b770-5db061d7ada7","type":"GlyphRenderer"}]},"id":"02927068-94ad-47ef-b32d-631f1161e812","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"9fabfde2-9975-4395-90a5-4ef2f0177ec7","type":"Circle"},{"attributes":{"data_source":{"id":"2c87345b-1718-4a62-9044-2ef6d99b4472","type":"ColumnDataSource"},"glyph":{"id":"69110188-894c-44de-9271-276362698fb1","type":"Segment"},"hover_glyph":null,"muted_glyph":null},"id":"ab6b9a31-65d5-448e-b90e-2644214b9c90","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"69110188-894c-44de-9271-276362698fb1","type":"Segment"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"42f8695a-94f3-4836-b87b-79ca2e150140","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"e7e91a88-cdb4-4c6b-b7ff-94ed7d488f7a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y0s","x1s","y1s","x0s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"2c87345b-1718-4a62-9044-2ef6d99b4472","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"MPG Summary (grouped by CYL)"},"id":"dd948ee7-10d0-47e0-a613-f3c67bc3f892","type":"Title"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"62eafb1c-7bdf-4c0c-ab59-835c8106b316","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"587a668a-e541-4218-acf9-b7daec74d42d","type":"ColumnDataSource"},"glyph":{"id":"c028e2da-a16e-4a21-b1a4-481125058750","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"7cba17ed-620b-4c8e-9621-e465912a74ab","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"549ed321-5999-4089-b122-4bef1d7a809a","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y0s","x1s","y1s","x0s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"aa912c25-9d1c-45a3-b8d4-846938bce480","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"966c6266-1144-4835-bc5d-9c1002757479","type":"LegendItem"},{"id":"ad98c39c-802a-48e2-b184-845d99d7d0d2","type":"LegendItem"},{"id":"4a3ae8d5-f9e7-481a-aebb-d64f34eb6b21","type":"LegendItem"},{"id":"63a3c8a1-d2d7-44df-b99a-504577686cbd","type":"LegendItem"},{"id":"02927068-94ad-47ef-b32d-631f1161e812","type":"LegendItem"}],"location":"top_left","plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"}},"id":"e0f94f3f-9f6f-4db7-b452-7580187837c3","type":"Legend"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"76132a10-647c-43e8-bd4e-e025fd22f4d2","type":"Rect"},{"attributes":{"data_source":{"id":"66023326-3f4f-42f0-93ee-40c93bd70d72","type":"ColumnDataSource"},"glyph":{"id":"ffe1aaec-f46e-45e7-8e86-d9bb5bda2bb1","type":"Segment"},"hover_glyph":null,"muted_glyph":null},"id":"8b73cda4-8042-4503-aa31-3819064004af","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"150371ac-0cfe-41e0-8152-c949a5b33331","type":"ColumnDataSource"},"glyph":{"id":"916f296b-2025-40c9-a465-67778e854316","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"db606de6-7c06-447d-997d-5da775f1e801","type":"GlyphRenderer"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"b4cac108-e86f-45e0-94cc-0b70242b8b5d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"},"ticker":{"id":"6512ef15-42bd-408d-b3bb-7ff09beaa6e5","type":"CategoricalTicker"}},"id":"71c41410-9a0d-49cf-9f45-6f2530099a70","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"c3ef339a-c48e-4e5e-8e74-0869f4c0e2d4","type":"ColumnDataSource"},"glyph":{"id":"aae8134d-c326-45ae-9ed8-7cefa3136307","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"f1c0a150-1eaf-47af-a903-4ddcc1926948","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d4bdea35-bd7b-46e0-a457-df9988e21217","type":"ColumnDataSource"},"glyph":{"id":"827cee45-a0ca-4cb4-af22-70294b4bf6d4","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"4339047f-14e9-46e6-bba8-664d67c82d4f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"c3ef339a-c48e-4e5e-8e74-0869f4c0e2d4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"aa912c25-9d1c-45a3-b8d4-846938bce480","type":"ColumnDataSource"},"glyph":{"id":"755fb2a0-6b47-4702-92b1-83ec7a1e45f9","type":"Segment"},"hover_glyph":null,"muted_glyph":null},"id":"0a678e1b-8832-43af-8772-6c734878bfd5","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"636fc97e-b334-439e-804f-eebdc022a81e","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"},"ticker":{"id":"7932f154-b86f-4226-93cb-325b9e6190b4","type":"BasicTicker"}},"id":"58deb3b9-1392-4524-9305-e0c94e3cd6bc","type":"Grid"},{"attributes":{"data_source":{"id":"e7e91a88-cdb4-4c6b-b7ff-94ed7d488f7a","type":"ColumnDataSource"},"glyph":{"id":"adb57ceb-5bc0-42dd-8654-465ec0c73204","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"8a743e95-4ee7-47fc-8c10-50ca2d8da8c3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"30e5bcfb-e5c3-4bc1-ac94-645c7845716c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4e1620e9-1f44-445c-9de1-420b926a266f","type":"ColumnDataSource"},"glyph":{"id":"3ae78620-796d-4af6-86ae-14946b465c42","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"f2b69943-fa81-4010-9954-bc0e3624d796","type":"GlyphRenderer"},{"attributes":{},"id":"3e16c9af-ea8a-4466-936c-b30714485f96","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"084b19f3-25c5-4e46-87fe-dc6fc651a04d","type":"ColumnDataSource"},"glyph":{"id":"e289e1fc-ec2c-4a05-ba22-8477b637c328","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"4f7bd344-201c-4b74-afa2-491308f0077e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"adb57ceb-5bc0-42dd-8654-465ec0c73204","type":"Rect"},{"attributes":{"data_source":{"id":"30e5bcfb-e5c3-4bc1-ac94-645c7845716c","type":"ColumnDataSource"},"glyph":{"id":"05ca73ea-2422-4d72-a919-178522f0590e","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"7eda7a29-7f95-4fdf-a87f-1b5b7a289580","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":{"__ndarray__":"zczMzMxMR0A=","dtype":"float64","shape":[1]}}},"id":"503d7585-b8e8-40c5-9f76-3ba105e6cb7d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"}},"id":"f322e9ef-78a5-40f0-94c1-8c1de179f596","type":"SaveTool"},{"attributes":{"data_source":{"id":"efc92d59-9685-40b1-b528-0a51ef405a1d","type":"ColumnDataSource"},"glyph":{"id":"7fcbdec2-2cf8-4bcc-a29a-914b3d5ba207","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"00ab0780-12c9-432d-bb21-bee456586803","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"150371ac-0cfe-41e0-8152-c949a5b33331","type":"ColumnDataSource"},{"attributes":{},"id":"6512ef15-42bd-408d-b3bb-7ff09beaa6e5","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aae8134d-c326-45ae-9ed8-7cefa3136307","type":"Rect"},{"attributes":{"callback":null,"column_names":["y0s","x1s","y1s","x0s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"c2d80c7e-2f1d-4c5c-8097-95bb25886e98","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e289e1fc-ec2c-4a05-ba22-8477b637c328","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"2a2d84d1-2133-4dfe-84c5-f8153dd3cae3","type":"Circle"},{"attributes":{"data_source":{"id":"4da32965-5a51-4245-ba49-1e91b0c3ad2e","type":"ColumnDataSource"},"glyph":{"id":"110b1daa-ecfb-4381-bf0e-f6a226d5267a","type":"Segment"},"hover_glyph":null,"muted_glyph":null},"id":"9871dfd4-c071-4465-a2d9-d33363bc2090","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y0s","x1s","y1s","x0s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"66023326-3f4f-42f0-93ee-40c93bd70d72","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"916f296b-2025-40c9-a465-67778e854316","type":"Rect"},{"attributes":{},"id":"b4cac108-e86f-45e0-94cc-0b70242b8b5d","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"62eafb1c-7bdf-4c0c-ab59-835c8106b316","type":"ColumnDataSource"},"glyph":{"id":"636fc97e-b334-439e-804f-eebdc022a81e","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"e3c22a2c-be65-445c-9000-21bac4648102","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"ffe1aaec-f46e-45e7-8e86-d9bb5bda2bb1","type":"Segment"},{"attributes":{},"id":"7932f154-b86f-4226-93cb-325b9e6190b4","type":"BasicTicker"},{"attributes":{"below":[{"id":"71c41410-9a0d-49cf-9f45-6f2530099a70","type":"CategoricalAxis"}],"css_classes":null,"left":[{"id":"a10dcc7f-41fe-4187-a9db-8e1655a6e815","type":"LinearAxis"}],"renderers":[{"id":"42f8695a-94f3-4836-b87b-79ca2e150140","type":"BoxAnnotation"},{"id":"8a743e95-4ee7-47fc-8c10-50ca2d8da8c3","type":"GlyphRenderer"},{"id":"6617de41-e6b7-49d8-9625-5c0689332de8","type":"GlyphRenderer"},{"id":"883956fd-0c89-46e1-ab48-68deb3dfbe0b","type":"GlyphRenderer"},{"id":"8b73cda4-8042-4503-aa31-3819064004af","type":"GlyphRenderer"},{"id":"4f7bd344-201c-4b74-afa2-491308f0077e","type":"GlyphRenderer"},{"id":"e3c22a2c-be65-445c-9000-21bac4648102","type":"GlyphRenderer"},{"id":"69551bf7-053e-44ce-b657-5dc8ce24f245","type":"GlyphRenderer"},{"id":"9871dfd4-c071-4465-a2d9-d33363bc2090","type":"GlyphRenderer"},{"id":"f2b69943-fa81-4010-9954-bc0e3624d796","type":"GlyphRenderer"},{"id":"f1c0a150-1eaf-47af-a903-4ddcc1926948","type":"GlyphRenderer"},{"id":"4339047f-14e9-46e6-bba8-664d67c82d4f","type":"GlyphRenderer"},{"id":"ab6b9a31-65d5-448e-b90e-2644214b9c90","type":"GlyphRenderer"},{"id":"7cba17ed-620b-4c8e-9621-e465912a74ab","type":"GlyphRenderer"},{"id":"00ab0780-12c9-432d-bb21-bee456586803","type":"GlyphRenderer"},{"id":"0a678e1b-8832-43af-8772-6c734878bfd5","type":"GlyphRenderer"},{"id":"db606de6-7c06-447d-997d-5da775f1e801","type":"GlyphRenderer"},{"id":"7eda7a29-7f95-4fdf-a87f-1b5b7a289580","type":"GlyphRenderer"},{"id":"e665a27d-2395-4b8b-b770-5db061d7ada7","type":"GlyphRenderer"},{"id":"e0f94f3f-9f6f-4db7-b452-7580187837c3","type":"Legend"},{"id":"71c41410-9a0d-49cf-9f45-6f2530099a70","type":"CategoricalAxis"},{"id":"a10dcc7f-41fe-4187-a9db-8e1655a6e815","type":"LinearAxis"},{"id":"58deb3b9-1392-4524-9305-e0c94e3cd6bc","type":"Grid"}],"title":{"id":"dd948ee7-10d0-47e0-a613-f3c67bc3f892","type":"Title"},"tool_events":{"id":"c34a7967-b892-48a3-847c-99398449251a","type":"ToolEvents"},"toolbar":{"id":"864d5945-daae-4a09-bed8-2513c23769c2","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"549ed321-5999-4089-b122-4bef1d7a809a","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"e5afc4a5-c9a0-4c5b-9076-32a9cfd46d15","type":"Range1d"}},"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"110b1daa-ecfb-4381-bf0e-f6a226d5267a","type":"Segment"},{"attributes":{"data_source":{"id":"011d1124-277c-43d6-9b44-2c928caea534","type":"ColumnDataSource"},"glyph":{"id":"76132a10-647c-43e8-bd4e-e025fd22f4d2","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"6617de41-e6b7-49d8-9625-5c0689332de8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"}},"id":"f548f4be-0880-40a4-b5f6-4e2851069177","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7da45a41-12fa-488a-a476-1f928cf8f1a1","type":"PanTool"},{"id":"f548f4be-0880-40a4-b5f6-4e2851069177","type":"WheelZoomTool"},{"id":"9dace402-d4ae-4671-bb2a-da4a81d7481e","type":"BoxZoomTool"},{"id":"f322e9ef-78a5-40f0-94c1-8c1de179f596","type":"SaveTool"},{"id":"1770157a-85e2-4253-8761-597d1097bad6","type":"ResetTool"},{"id":"2bba9cad-21d5-4988-93e1-afd38ca3bb41","type":"HelpTool"}]},"id":"864d5945-daae-4a09-bed8-2513c23769c2","type":"Toolbar"},{"attributes":{"plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"}},"id":"1770157a-85e2-4253-8761-597d1097bad6","type":"ResetTool"},{"attributes":{"data_source":{"id":"dc9a4c8a-af1e-4702-86ee-f5a83c7fbd5c","type":"ColumnDataSource"},"glyph":{"id":"9fabfde2-9975-4395-90a5-4ef2f0177ec7","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"883956fd-0c89-46e1-ab48-68deb3dfbe0b","type":"GlyphRenderer"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"8a743e95-4ee7-47fc-8c10-50ca2d8da8c3","type":"GlyphRenderer"},{"id":"6617de41-e6b7-49d8-9625-5c0689332de8","type":"GlyphRenderer"},{"id":"883956fd-0c89-46e1-ab48-68deb3dfbe0b","type":"GlyphRenderer"},{"id":"8b73cda4-8042-4503-aa31-3819064004af","type":"GlyphRenderer"}]},"id":"966c6266-1144-4835-bc5d-9c1002757479","type":"LegendItem"},{"attributes":{"callback":null,"end":49.38},"id":"e5afc4a5-c9a0-4c5b-9076-32a9cfd46d15","type":"Range1d"},{"attributes":{"overlay":{"id":"42f8695a-94f3-4836-b87b-79ca2e150140","type":"BoxAnnotation"},"plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"}},"id":"9dace402-d4ae-4671-bb2a-da4a81d7481e","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fcbdec2-2cf8-4bcc-a29a-914b3d5ba207","type":"Rect"},{"attributes":{"callback":null,"column_names":["y0s","x1s","y1s","x0s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"4da32965-5a51-4245-ba49-1e91b0c3ad2e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"13382f00-6a31-426b-ab84-d71104f25430","subtype":"Chart","type":"Plot"}},"id":"2bba9cad-21d5-4988-93e1-afd38ca3bb41","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"4e1620e9-1f44-445c-9de1-420b926a266f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"587a668a-e541-4218-acf9-b7daec74d42d","type":"ColumnDataSource"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"7cba17ed-620b-4c8e-9621-e465912a74ab","type":"GlyphRenderer"},{"id":"00ab0780-12c9-432d-bb21-bee456586803","type":"GlyphRenderer"},{"id":"0a678e1b-8832-43af-8772-6c734878bfd5","type":"GlyphRenderer"}]},"id":"63a3c8a1-d2d7-44df-b99a-504577686cbd","type":"LegendItem"},{"attributes":{},"id":"c34a7967-b892-48a3-847c-99398449251a","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"05ca73ea-2422-4d72-a919-178522f0590e","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"efc92d59-9685-40b1-b528-0a51ef405a1d","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"755fb2a0-6b47-4702-92b1-83ec7a1e45f9","type":"Segment"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":{"__ndarray__":"zczMzMzMPEDNzMzMzMw6QJqZmZmZWUBAMzMzMzOzPkAAAAAAAABDQA==","dtype":"float64","shape":[5]}}},"id":"d4bdea35-bd7b-46e0-a457-df9988e21217","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"503d7585-b8e8-40c5-9f76-3ba105e6cb7d","type":"ColumnDataSource"},"glyph":{"id":"2a2d84d1-2133-4dfe-84c5-f8153dd3cae3","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"69551bf7-053e-44ce-b657-5dc8ce24f245","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"084b19f3-25c5-4e46-87fe-dc6fc651a04d","type":"ColumnDataSource"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"4f7bd344-201c-4b74-afa2-491308f0077e","type":"GlyphRenderer"},{"id":"e3c22a2c-be65-445c-9000-21bac4648102","type":"GlyphRenderer"},{"id":"69551bf7-053e-44ce-b657-5dc8ce24f245","type":"GlyphRenderer"},{"id":"9871dfd4-c071-4465-a2d9-d33363bc2090","type":"GlyphRenderer"}]},"id":"ad98c39c-802a-48e2-b184-845d99d7d0d2","type":"LegendItem"}],"root_ids":["13382f00-6a31-426b-ab84-d71104f25430"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"20b1e62b-8656-4a25-8728-7797536c6af7","elementid":"335d966b-1079-4281-a1b2-e952dd88b295","modelid":"13382f00-6a31-426b-ab84-d71104f25430"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();