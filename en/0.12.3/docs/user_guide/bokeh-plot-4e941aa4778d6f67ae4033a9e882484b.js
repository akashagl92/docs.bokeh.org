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
      };var element = document.getElementById("df5c55e9-576d-4b42-9bdf-d14537071235");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'df5c55e9-576d-4b42-9bdf-d14537071235' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"ca87627a-915f-41d2-b7d9-1b48d1ca6dd4":{"roots":{"references":[{"attributes":{"callback":null,"end":79.8304347826087},"id":"52042469-1775-499d-9dcf-86c52577972c","type":"Range1d"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"5f983d90-f6f2-4fee-a4ca-f24a9aba84c1","type":"GlyphRenderer"}]},"id":"f68a64aa-2e1d-4482-a712-70e364cd1112","type":"LegendItem"},{"attributes":{"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"}},"id":"aa44c1a3-8b86-4804-89a0-e959d4a0d9da","type":"HelpTool"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"839942d0-1521-4808-80ec-f8973aa47be5","type":"GlyphRenderer"}]},"id":"5dca7eae-d1d9-479e-a5f8-c83f5d05ff57","type":"LegendItem"},{"attributes":{},"id":"af269358-b781-4782-99db-90e558e23e28","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5,"origin":2}],"color":["#407ee7"],"cyl":[5],"fill_alpha":[0.8],"height":[27.366666666666664],"label":[{"cyl":5,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[41.789890710382515]}},"id":"42ff3eda-3565-46f1-aabd-12993fe01b58","type":"ColumnDataSource"},{"attributes":{},"id":"d0a6f28c-c5d4-4384-8b02-ea504d75f3c0","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7459eb8d-500f-40a8-8f6b-17edf68beea9","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"65a4fe71-05b4-4861-a20c-2a114d6053d5","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"00995f35-dadb-4ed2-8d4e-534f43241d9c","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"42ff3eda-3565-46f1-aabd-12993fe01b58","type":"ColumnDataSource"},"glyph":{"id":"5557a243-45be-49c9-9c63-13507e52937a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"788820d9-3301-4050-950c-8560e598ee07","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3,"origin":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[20.55],"label":[{"cyl":3,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[10.275]}},"id":"e470fdc9-321b-486c-b91d-b0e8afd162fb","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6,"origin":2}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[20.1],"label":[{"cyl":6,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[65.52322404371584]}},"id":"8d475cab-6031-4095-ac33-7a7520c7698f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"}},"id":"dfeb0878-1f46-48ec-a5e1-d2509be117af","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"},"ticker":{"id":"88407244-4c43-406b-9ab4-9d8f4bb15e9b","type":"BasicTicker"}},"id":"8ff94310-3a75-4c4d-a9f9-c8c5d3943321","type":"Grid"},{"attributes":{"axis_label":"Origin","formatter":{"id":"bb9ec7c5-6770-400a-b51f-2166f749426b","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"},"ticker":{"id":"af269358-b781-4782-99db-90e558e23e28","type":"CategoricalTicker"}},"id":"94247191-3227-46b7-84b0-c3e71201d77b","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1062c70b-1b47-430a-9226-2a56e523993c","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8,"origin":1}],"color":["#00ad9c"],"cyl":[8],"fill_alpha":[0.8],"height":[14.963106796116502],"label":[{"cyl":8,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[55.139802355771174]}},"id":"ec6eaa1e-1f68-4e8b-a4b8-875847a7a039","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"}},"id":"38bbc4c9-003a-4b62-b827-773af99b4c04","type":"PanTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6,"origin":1}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[19.645205479452052],"label":[{"cyl":6,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[37.83564621798689]}},"id":"7750c199-4283-425e-990b-6af11288e1b8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"526f6652-86d2-4fc0-a6de-312ff267cf6a","type":"ColumnDataSource"},"glyph":{"id":"7459eb8d-500f-40a8-8f6b-17edf68beea9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7b5f6738-4482-4dda-a1d0-e8502ce40745","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"38bbc4c9-003a-4b62-b827-773af99b4c04","type":"PanTool"},{"id":"dfeb0878-1f46-48ec-a5e1-d2509be117af","type":"WheelZoomTool"},{"id":"bbd9b9cd-fc73-4ef7-9ec6-90a58f5dfbd0","type":"BoxZoomTool"},{"id":"d1a83d77-1c44-4a28-9035-216db29bcca6","type":"SaveTool"},{"id":"88efbfc3-0bd8-432b-a3e5-ec955568dae0","type":"ResetTool"},{"id":"aa44c1a3-8b86-4804-89a0-e959d4a0d9da","type":"HelpTool"}]},"id":"48128819-fd66-4db9-95d6-b0895fafcb52","type":"Toolbar"},{"attributes":{},"id":"88407244-4c43-406b-9ab4-9d8f4bb15e9b","type":"BasicTicker"},{"attributes":{"axis_label":"Mean( Mpg )","formatter":{"id":"d0a6f28c-c5d4-4384-8b02-ea504d75f3c0","type":"BasicTickFormatter"},"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"},"ticker":{"id":"88407244-4c43-406b-9ab4-9d8f4bb15e9b","type":"BasicTicker"}},"id":"b1586dc3-5057-47fd-a23a-24a7af4163f3","type":"LinearAxis"},{"attributes":{"data_source":{"id":"fa05ebfa-98fd-47a7-bc15-fd552f4eb740","type":"ColumnDataSource"},"glyph":{"id":"67100877-b800-4f2b-a7dc-e93023fd919b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b2224a67-7286-4cef-9261-05d0d4e23610","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"6ee751e3-4afc-418a-95a9-b080e17a7d2a","type":"LegendItem"},{"id":"91c26821-baaa-4dc6-88c1-13057774d4ea","type":"LegendItem"},{"id":"f50f2112-c98f-4cf8-b5c8-64156fca486e","type":"LegendItem"},{"id":"5dca7eae-d1d9-479e-a5f8-c83f5d05ff57","type":"LegendItem"},{"id":"f68a64aa-2e1d-4482-a712-70e364cd1112","type":"LegendItem"}],"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"}},"id":"7bffd1bc-3117-4903-b1fc-0ac576691cde","type":"Legend"},{"attributes":{"data_source":{"id":"8d475cab-6031-4095-ac33-7a7520c7698f","type":"ColumnDataSource"},"glyph":{"id":"65a4fe71-05b4-4861-a20c-2a114d6053d5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4d4e638f-2cd0-4f35-84f6-3e0b1bc12db4","type":"GlyphRenderer"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"788820d9-3301-4050-950c-8560e598ee07","type":"GlyphRenderer"}]},"id":"f50f2112-c98f-4cf8-b5c8-64156fca486e","type":"LegendItem"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"92a895f2-b961-4137-8a5f-509a1d0334f6","type":"Rect"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"b2224a67-7286-4cef-9261-05d0d4e23610","type":"GlyphRenderer"}]},"id":"91c26821-baaa-4dc6-88c1-13057774d4ea","type":"LegendItem"},{"attributes":{"data_source":{"id":"8c37bb43-aa4c-4604-9eaf-38cc06e815e1","type":"ColumnDataSource"},"glyph":{"id":"92a895f2-b961-4137-8a5f-509a1d0334f6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3e084d64-1709-4141-ba85-0040187985ec","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5557a243-45be-49c9-9c63-13507e52937a","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4,"origin":2}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[28.10655737704918],"label":[{"cyl":4,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[14.05327868852459]}},"id":"1e871ef3-ff55-4da8-a426-57c65f82a057","type":"ColumnDataSource"},{"attributes":{},"id":"bdaddb74-4e52-486f-93a4-1890f0c877f7","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e6c1e176-fdf0-4bc1-834d-653170b0c2b4","type":"Rect"},{"attributes":{"plot":null,"text":"Avg MPG by ORIGIN, stacked by CYL"},"id":"22fa9783-399e-4d40-a2e2-9e89f87cc6e1","type":"Title"},{"attributes":{"callback":null,"factors":["1","2","3"]},"id":"651b7fd0-b6a9-4a59-8f66-686b45137ae7","type":"FactorRange"},{"attributes":{},"id":"bb9ec7c5-6770-400a-b51f-2166f749426b","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"7750c199-4283-425e-990b-6af11288e1b8","type":"ColumnDataSource"},"glyph":{"id":"e6c1e176-fdf0-4bc1-834d-653170b0c2b4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"839942d0-1521-4808-80ec-f8973aa47be5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ec6eaa1e-1f68-4e8b-a4b8-875847a7a039","type":"ColumnDataSource"},"glyph":{"id":"1062c70b-1b47-430a-9226-2a56e523993c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5f983d90-f6f2-4fee-a4ca-f24a9aba84c1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"}},"id":"d1a83d77-1c44-4a28-9035-216db29bcca6","type":"SaveTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"67100877-b800-4f2b-a7dc-e93023fd919b","type":"Rect"},{"attributes":{"below":[{"id":"94247191-3227-46b7-84b0-c3e71201d77b","type":"CategoricalAxis"}],"height":400,"left":[{"id":"b1586dc3-5057-47fd-a23a-24a7af4163f3","type":"LinearAxis"}],"renderers":[{"id":"00995f35-dadb-4ed2-8d4e-534f43241d9c","type":"BoxAnnotation"},{"id":"5759a36b-60f4-4b1a-a8a1-e44ce6970177","type":"GlyphRenderer"},{"id":"b2224a67-7286-4cef-9261-05d0d4e23610","type":"GlyphRenderer"},{"id":"7b5f6738-4482-4dda-a1d0-e8502ce40745","type":"GlyphRenderer"},{"id":"2e61ac1b-fedd-4147-96f8-b86213a18122","type":"GlyphRenderer"},{"id":"788820d9-3301-4050-950c-8560e598ee07","type":"GlyphRenderer"},{"id":"839942d0-1521-4808-80ec-f8973aa47be5","type":"GlyphRenderer"},{"id":"4d4e638f-2cd0-4f35-84f6-3e0b1bc12db4","type":"GlyphRenderer"},{"id":"3e084d64-1709-4141-ba85-0040187985ec","type":"GlyphRenderer"},{"id":"5f983d90-f6f2-4fee-a4ca-f24a9aba84c1","type":"GlyphRenderer"},{"id":"7bffd1bc-3117-4903-b1fc-0ac576691cde","type":"Legend"},{"id":"94247191-3227-46b7-84b0-c3e71201d77b","type":"CategoricalAxis"},{"id":"b1586dc3-5057-47fd-a23a-24a7af4163f3","type":"LinearAxis"},{"id":"8ff94310-3a75-4c4d-a9f9-c8c5d3943321","type":"Grid"}],"title":{"id":"22fa9783-399e-4d40-a2e2-9e89f87cc6e1","type":"Title"},"tool_events":{"id":"bdaddb74-4e52-486f-93a4-1890f0c877f7","type":"ToolEvents"},"toolbar":{"id":"48128819-fd66-4db9-95d6-b0895fafcb52","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"651b7fd0-b6a9-4a59-8f66-686b45137ae7","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"52042469-1775-499d-9dcf-86c52577972c","type":"Range1d"}},"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6,"origin":3}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[23.883333333333336],"label":[{"cyl":6,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[64.08731884057971]}},"id":"8c37bb43-aa4c-4604-9eaf-38cc06e815e1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4,"origin":1}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[28.01304347826087],"label":[{"cyl":4,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[14.006521739130434]}},"id":"fa05ebfa-98fd-47a7-bc15-fd552f4eb740","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4,"origin":3}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[31.59565217391305],"label":[{"cyl":4,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[36.34782608695652]}},"id":"526f6652-86d2-4fc0-a6de-312ff267cf6a","type":"ColumnDataSource"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"5759a36b-60f4-4b1a-a8a1-e44ce6970177","type":"GlyphRenderer"}]},"id":"6ee751e3-4afc-418a-95a9-b080e17a7d2a","type":"LegendItem"},{"attributes":{"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"}},"id":"88efbfc3-0bd8-432b-a3e5-ec955568dae0","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31553d2a-b3f0-4b14-bae3-2026757d7dab","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8649d449-7958-41d7-a6ae-8c3c439d779d","type":"Rect"},{"attributes":{"overlay":{"id":"00995f35-dadb-4ed2-8d4e-534f43241d9c","type":"BoxAnnotation"},"plot":{"id":"59b58e66-1c81-4bb7-8e85-4333f920c069","subtype":"Chart","type":"Plot"}},"id":"bbd9b9cd-fc73-4ef7-9ec6-90a58f5dfbd0","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"1e871ef3-ff55-4da8-a426-57c65f82a057","type":"ColumnDataSource"},"glyph":{"id":"8649d449-7958-41d7-a6ae-8c3c439d779d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2e61ac1b-fedd-4147-96f8-b86213a18122","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e470fdc9-321b-486c-b91d-b0e8afd162fb","type":"ColumnDataSource"},"glyph":{"id":"31553d2a-b3f0-4b14-bae3-2026757d7dab","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5759a36b-60f4-4b1a-a8a1-e44ce6970177","type":"GlyphRenderer"}],"root_ids":["59b58e66-1c81-4bb7-8e85-4333f920c069"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"ca87627a-915f-41d2-b7d9-1b48d1ca6dd4","elementid":"df5c55e9-576d-4b42-9bdf-d14537071235","modelid":"59b58e66-1c81-4bb7-8e85-4333f920c069"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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