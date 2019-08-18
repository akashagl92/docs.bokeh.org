document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("d1f4e049-b960-4092-b862-b00bcc458d60");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd1f4e049-b960-4092-b862-b00bcc458d60' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"8d896a92-59d5-4ac6-a84b-bda1289c54d6":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"81b91e1b-be14-4163-972f-bad3acd5272c","type":"Rect"},{"attributes":{"data_source":{"id":"edac933e-ef93-4867-8d39-c2683728c626","type":"ColumnDataSource"},"glyph":{"id":"1f4ad760-b10b-4022-b1fc-d399589ba9fd","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ebac71bb-9f38-42cc-b99b-108707085968","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"eb42bc64-af0a-48d0-b26a-eb06e741f649","type":"ColumnDataSource"},"glyph":{"id":"2a222e07-c9ee-44b8-99e4-c3ff0bfefb22","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"70cd8986-7999-448f-9db2-4c2544df01bd","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7815497-2235-4b1f-8210-952d6a576e24","type":"Rect"},{"attributes":{"data_source":{"id":"96455e6e-5a02-4adf-89d9-713cbc51a088","type":"ColumnDataSource"},"glyph":{"id":"2c97f3c7-73ed-492d-babd-a4d142a933fe","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4de6b50d-8335-4177-96c6-396a170f90bc","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"}},"id":"6a7d0146-4048-4e26-9693-2a631ebff2cc","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"MPG Summary (grouped and shaded by CYL)"},"id":"66da6207-7273-4fbf-9497-0e2dd838eb9e","type":"Title"},{"attributes":{"data_source":{"id":"bca697c1-4d1f-47f9-8e63-ba9a3170c0da","type":"ColumnDataSource"},"glyph":{"id":"3eebbea7-fc2e-4f66-8516-001bbc50a6a6","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bcd97c6e-17b2-41b6-a37e-32ea216760d9","type":"GlyphRenderer"},{"attributes":{},"id":"f633a7d6-f26a-4aae-806c-8cc0924b3e41","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"388869ed-fac0-406f-9950-9ed80a2f00b3","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":[26.8,28.8,32.7,38.0,30.7]}},"id":"edac933e-ef93-4867-8d39-c2683728c626","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"fd867a4b-0f0d-4c90-9c67-9d3f6b2c42da","type":"CategoricalAxis"}],"height":400,"left":[{"id":"1d86f1a2-dd5f-4546-9400-1c4c5b06d5a1","type":"LinearAxis"}],"renderers":[{"id":"41c9c0f5-9349-4f90-b7d7-ae68bd96012e","type":"BoxAnnotation"},{"id":"2e70d471-c74d-483c-bd6a-cb711947d282","type":"GlyphRenderer"},{"id":"f011a20f-4ba9-4172-8e85-abbddf02a475","type":"GlyphRenderer"},{"id":"bcd97c6e-17b2-41b6-a37e-32ea216760d9","type":"GlyphRenderer"},{"id":"cfced045-3957-4cc2-bb13-6816bc7a419f","type":"GlyphRenderer"},{"id":"46806d19-48cf-4112-ad46-37c51b03cacc","type":"GlyphRenderer"},{"id":"4de6b50d-8335-4177-96c6-396a170f90bc","type":"GlyphRenderer"},{"id":"70cd8986-7999-448f-9db2-4c2544df01bd","type":"GlyphRenderer"},{"id":"a3bdfb01-2a7f-4647-bce9-cbe870a4a243","type":"GlyphRenderer"},{"id":"0ec5a3f6-d006-4958-8e36-4636595d4e42","type":"GlyphRenderer"},{"id":"05740c7c-c7a1-451e-a3dd-6e9bac9f7b8d","type":"GlyphRenderer"},{"id":"58e0d465-f298-48e8-bfec-f72b94f1d8aa","type":"GlyphRenderer"},{"id":"44a70e6c-5c59-44a5-ad03-c1f2f7c3bac6","type":"GlyphRenderer"},{"id":"ebac71bb-9f38-42cc-b99b-108707085968","type":"GlyphRenderer"},{"id":"1afc188c-dcf2-4e78-a7a6-3e53b808bdbe","type":"GlyphRenderer"},{"id":"145b50ff-b583-4b92-b9f0-acad6ac451d0","type":"GlyphRenderer"},{"id":"34802232-f040-481a-996d-c4eee87cfd0a","type":"GlyphRenderer"},{"id":"927e715d-9479-4602-8180-eab56a83e341","type":"GlyphRenderer"},{"id":"26750ab2-e162-4f9a-b2d3-8e069e9ba1c9","type":"GlyphRenderer"},{"id":"a9e13dc3-2b49-433a-893c-29cc9f799c56","type":"Legend"},{"id":"fd867a4b-0f0d-4c90-9c67-9d3f6b2c42da","type":"CategoricalAxis"},{"id":"1d86f1a2-dd5f-4546-9400-1c4c5b06d5a1","type":"LinearAxis"},{"id":"3f349916-040c-4c58-b40e-c2798668d7ea","type":"Grid"}],"title":{"id":"66da6207-7273-4fbf-9497-0e2dd838eb9e","type":"Title"},"tool_events":{"id":"ec67481c-ba2e-4c66-be0e-6e07d296326b","type":"ToolEvents"},"toolbar":{"id":"acbdee48-fa9f-4cfe-951a-ba03a01efcbf","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"388869ed-fac0-406f-9950-9ed80a2f00b3","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"10f89383-81f5-4a02-99b2-d597a3d85057","type":"Range1d"}},"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"}},"id":"32f28097-75da-4c65-85c1-ddcc794c064b","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"41c9c0f5-9349-4f90-b7d7-ae68bd96012e","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"a290884a-eb21-4221-bf65-32c955257302","type":"ColumnDataSource"},"glyph":{"id":"81b91e1b-be14-4163-972f-bad3acd5272c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"44a70e6c-5c59-44a5-ad03-c1f2f7c3bac6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#00ad9c"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"4071836d-e706-4f61-8f46-b1f1f41c160e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"226930a0-cd64-46d6-8377-3c9d358f77ec","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"2a222e07-c9ee-44b8-99e4-c3ff0bfefb22","type":"Segment"},{"attributes":{"plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"}},"id":"dcf1599d-ec22-430a-989f-db245234047d","type":"PanTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a085a55-c053-43f7-9546-1076b33e0f97","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"7f45a7a2-1933-47e5-9a9e-a0f53b1e0909","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"1f4ad760-b10b-4022-b1fc-d399589ba9fd","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dcf1599d-ec22-430a-989f-db245234047d","type":"PanTool"},{"id":"6a7d0146-4048-4e26-9693-2a631ebff2cc","type":"WheelZoomTool"},{"id":"7ed9323f-efe5-42de-85dd-13ef3389682b","type":"BoxZoomTool"},{"id":"32f28097-75da-4c65-85c1-ddcc794c064b","type":"SaveTool"},{"id":"c1fd72ba-cb5f-4b9f-b445-deecf3b446f2","type":"ResetTool"},{"id":"6d3ce2de-0d0b-4c21-89b6-bb1fd7b6060f","type":"HelpTool"}]},"id":"acbdee48-fa9f-4cfe-951a-ba03a01efcbf","type":"Toolbar"},{"attributes":{"data_source":{"id":"7f45a7a2-1933-47e5-9a9e-a0f53b1e0909","type":"ColumnDataSource"},"glyph":{"id":"ca078e75-ce09-49bb-aa2e-dad76c6c8479","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2e70d471-c74d-483c-bd6a-cb711947d282","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"21bfdb65-d5f2-486c-9653-1900cfeebbbf","type":"ColumnDataSource"},"glyph":{"id":"b820ad41-a125-46d6-8572-1df7613954cd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0ec5a3f6-d006-4958-8e36-4636595d4e42","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"aacb8d98-f447-48c6-bd10-6f79fcf6d002","type":"ColumnDataSource"},"glyph":{"id":"a7815497-2235-4b1f-8210-952d6a576e24","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"46806d19-48cf-4112-ad46-37c51b03cacc","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"cc7f82bb-76ac-4ef0-87a0-68721289ee07","type":"ColumnDataSource"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"4c611db8-1122-4858-bf2f-5d515e4d1e59","type":"BasicTickFormatter"},"plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"},"ticker":{"id":"292478c3-4351-46da-a50a-a2f2ea2a5291","type":"BasicTicker"}},"id":"1d86f1a2-dd5f-4546-9400-1c4c5b06d5a1","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3a23baa3-cc90-4e37-84c1-1757d6d5275e","type":"Circle"},{"attributes":{},"id":"4c611db8-1122-4858-bf2f-5d515e4d1e59","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"aacb8d98-f447-48c6-bd10-6f79fcf6d002","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"316e59bd-f460-4de3-bef2-36a1fe03400c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ea545eda-7d3d-43f3-8125-4b724b7dc18b","type":"ColumnDataSource"},"glyph":{"id":"60c60150-cde9-41ab-bcb8-17fc44ec27ea","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"26750ab2-e162-4f9a-b2d3-8e069e9ba1c9","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5c7c9ffa-46d3-47c0-9aad-a12f7b5f29b5","type":"ColumnDataSource"},"glyph":{"id":"e05d53cd-33aa-4424-af34-86d625719fb4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"145b50ff-b583-4b92-b9f0-acad6ac451d0","type":"GlyphRenderer"},{"attributes":{},"id":"292478c3-4351-46da-a50a-a2f2ea2a5291","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#407ee7"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"757acfa0-ce4c-4557-b12d-0332d4d1aaa9","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"000c582e-9034-452c-a0a7-6472d51afb23","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":[46.6]}},"id":"96455e6e-5a02-4adf-89d9-713cbc51a088","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"de80d36a-aea7-4736-8b41-1dcb5210e41d","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"2c97f3c7-73ed-492d-babd-a4d142a933fe","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"},"ticker":{"id":"292478c3-4351-46da-a50a-a2f2ea2a5291","type":"BasicTicker"}},"id":"3f349916-040c-4c58-b40e-c2798668d7ea","type":"Grid"},{"attributes":{"data_source":{"id":"000c582e-9034-452c-a0a7-6472d51afb23","type":"ColumnDataSource"},"glyph":{"id":"10a51968-9a34-4e09-b4c1-6a39e1a8e789","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cfced045-3957-4cc2-bb13-6816bc7a419f","type":"GlyphRenderer"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"a0495753-cd0e-480f-be37-a7cdc597e589","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"},"ticker":{"id":"f633a7d6-f26a-4aae-806c-8cc0924b3e41","type":"CategoricalTicker"}},"id":"fd867a4b-0f0d-4c90-9c67-9d3f6b2c42da","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee4b614d-6ebd-458e-a42f-201459b358d8","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"70b28998-09e8-420b-9795-491c182dcc22","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85b1890e-f7ae-4e79-8251-2e991e295076","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"ea545eda-7d3d-43f3-8125-4b724b7dc18b","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":49.38},"id":"10f89383-81f5-4a02-99b2-d597a3d85057","type":"Range1d"},{"attributes":{"legends":[["3",[{"id":"2e70d471-c74d-483c-bd6a-cb711947d282","type":"GlyphRenderer"},{"id":"f011a20f-4ba9-4172-8e85-abbddf02a475","type":"GlyphRenderer"},{"id":"bcd97c6e-17b2-41b6-a37e-32ea216760d9","type":"GlyphRenderer"}]],["4",[{"id":"cfced045-3957-4cc2-bb13-6816bc7a419f","type":"GlyphRenderer"},{"id":"46806d19-48cf-4112-ad46-37c51b03cacc","type":"GlyphRenderer"},{"id":"4de6b50d-8335-4177-96c6-396a170f90bc","type":"GlyphRenderer"},{"id":"70cd8986-7999-448f-9db2-4c2544df01bd","type":"GlyphRenderer"}]],["5",[{"id":"a3bdfb01-2a7f-4647-bce9-cbe870a4a243","type":"GlyphRenderer"},{"id":"0ec5a3f6-d006-4958-8e36-4636595d4e42","type":"GlyphRenderer"},{"id":"05740c7c-c7a1-451e-a3dd-6e9bac9f7b8d","type":"GlyphRenderer"}]],["6",[{"id":"58e0d465-f298-48e8-bfec-f72b94f1d8aa","type":"GlyphRenderer"},{"id":"44a70e6c-5c59-44a5-ad03-c1f2f7c3bac6","type":"GlyphRenderer"},{"id":"ebac71bb-9f38-42cc-b99b-108707085968","type":"GlyphRenderer"},{"id":"1afc188c-dcf2-4e78-a7a6-3e53b808bdbe","type":"GlyphRenderer"}]],["8",[{"id":"145b50ff-b583-4b92-b9f0-acad6ac451d0","type":"GlyphRenderer"},{"id":"34802232-f040-481a-996d-c4eee87cfd0a","type":"GlyphRenderer"},{"id":"927e715d-9479-4602-8180-eab56a83e341","type":"GlyphRenderer"},{"id":"26750ab2-e162-4f9a-b2d3-8e069e9ba1c9","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"}},"id":"a9e13dc3-2b49-433a-893c-29cc9f799c56","type":"Legend"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca078e75-ce09-49bb-aa2e-dad76c6c8479","type":"Rect"},{"attributes":{"data_source":{"id":"226930a0-cd64-46d6-8377-3c9d358f77ec","type":"ColumnDataSource"},"glyph":{"id":"01a1536f-fb5b-4ead-a890-046533462953","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"58e0d465-f298-48e8-bfec-f72b94f1d8aa","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4071836d-e706-4f61-8f46-b1f1f41c160e","type":"ColumnDataSource"},"glyph":{"id":"85b1890e-f7ae-4e79-8251-2e991e295076","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"34802232-f040-481a-996d-c4eee87cfd0a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cc7f82bb-76ac-4ef0-87a0-68721289ee07","type":"ColumnDataSource"},"glyph":{"id":"de80d36a-aea7-4736-8b41-1dcb5210e41d","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"05740c7c-c7a1-451e-a3dd-6e9bac9f7b8d","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"60c60150-cde9-41ab-bcb8-17fc44ec27ea","type":"Segment"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":[26.6,23.0,23.9]}},"id":"9eeda08a-e412-4b87-a41f-d9dd9cee40df","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"9eeda08a-e412-4b87-a41f-d9dd9cee40df","type":"ColumnDataSource"},"glyph":{"id":"3a23baa3-cc90-4e37-84c1-1757d6d5275e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"927e715d-9479-4602-8180-eab56a83e341","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"01a1536f-fb5b-4ead-a890-046533462953","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10a51968-9a34-4e09-b4c1-6a39e1a8e789","type":"Rect"},{"attributes":{"overlay":{"id":"41c9c0f5-9349-4f90-b7d7-ae68bd96012e","type":"BoxAnnotation"},"plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"}},"id":"7ed9323f-efe5-42de-85dd-13ef3389682b","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"70b28998-09e8-420b-9795-491c182dcc22","type":"ColumnDataSource"},"glyph":{"id":"ee4b614d-6ebd-458e-a42f-201459b358d8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f011a20f-4ba9-4172-8e85-abbddf02a475","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#00ad9c"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"5c7c9ffa-46d3-47c0-9aad-a12f7b5f29b5","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b820ad41-a125-46d6-8572-1df7613954cd","type":"Rect"},{"attributes":{"plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"}},"id":"c1fd72ba-cb5f-4b9f-b445-deecf3b446f2","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e05d53cd-33aa-4424-af34-86d625719fb4","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"eb42bc64-af0a-48d0-b26a-eb06e741f649","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"a290884a-eb21-4221-bf65-32c955257302","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"3eebbea7-fc2e-4f66-8516-001bbc50a6a6","type":"Segment"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"bca697c1-4d1f-47f9-8e63-ba9a3170c0da","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#407ee7"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"21bfdb65-d5f2-486c-9653-1900cfeebbbf","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"cda34f94-e36b-4776-87e7-a216af5050a6","type":"Segment"},{"attributes":{},"id":"ec67481c-ba2e-4c66-be0e-6e07d296326b","type":"ToolEvents"},{"attributes":{"plot":{"id":"de0c82ee-eb8d-4f78-85db-59387c210814","subtype":"Chart","type":"Plot"}},"id":"6d3ce2de-0d0b-4c21-89b6-bb1fd7b6060f","type":"HelpTool"},{"attributes":{},"id":"a0495753-cd0e-480f-be37-a7cdc597e589","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"316e59bd-f460-4de3-bef2-36a1fe03400c","type":"ColumnDataSource"},"glyph":{"id":"cda34f94-e36b-4776-87e7-a216af5050a6","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1afc188c-dcf2-4e78-a7a6-3e53b808bdbe","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"757acfa0-ce4c-4557-b12d-0332d4d1aaa9","type":"ColumnDataSource"},"glyph":{"id":"9a085a55-c053-43f7-9546-1076b33e0f97","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a3bdfb01-2a7f-4647-bce9-cbe870a4a243","type":"GlyphRenderer"}],"root_ids":["de0c82ee-eb8d-4f78-85db-59387c210814"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"8d896a92-59d5-4ac6-a84b-bda1289c54d6","elementid":"d1f4e049-b960-4092-b862-b00bcc458d60","modelid":"de0c82ee-eb8d-4f78-85db-59387c210814"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});