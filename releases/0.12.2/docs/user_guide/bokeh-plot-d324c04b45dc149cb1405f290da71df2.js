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
      };var element = document.getElementById("a9618a37-1790-4858-899a-6ffd8680d56d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a9618a37-1790-4858-899a-6ffd8680d56d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"7c1f640f-07fb-4d76-a5f0-d41e67fe4b6b":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a051cdfe-6954-494b-afa1-4faf0cd1c7fa","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#f22c40"],"cyl":[8],"fill_alpha":[0.8],"height":[1541.1999999999998],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["8"],"y":[770.5999999999999]}},"id":"3ac57218-457c-484c-b959-53cc7b8f5ab0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"}},"id":"b8e11324-c561-4d94-bd06-bf177fee08d7","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#f22c40"],"cyl":[4],"fill_alpha":[0.8],"height":[5827.5],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["4"],"y":[2913.75]}},"id":"48ee16d3-2165-4585-9f17-4d4f14ac03bb","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"},"ticker":{"id":"6378dfe8-efea-41e2-8d6a-f96648cbc57a","type":"BasicTicker"}},"id":"f2af6a06-a9b6-475f-8aed-5e5c0fe66378","type":"Grid"},{"attributes":{"legends":[["3",[{"id":"e2b7ae7f-c873-4261-860b-4fd7fcd1b664","type":"GlyphRenderer"}]],["4",[{"id":"6725bd72-d401-4393-8322-a9576d3b60d7","type":"GlyphRenderer"}]],["5",[{"id":"51328d57-e32a-4664-802f-6c227bc8befa","type":"GlyphRenderer"}]],["6",[{"id":"59458b33-794b-46c2-beca-263af545a8dd","type":"GlyphRenderer"}]],["8",[{"id":"db60486e-4d15-4325-940b-e8e4f9aa6672","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"}},"id":"ea2c1174-a248-4518-9366-2362ec567816","type":"Legend"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"893620a2-15cf-4fcc-b474-c287329621d5","type":"Rect"},{"attributes":{"data_source":{"id":"dbf71c01-0715-41cd-9656-f8fafd6cac17","type":"ColumnDataSource"},"glyph":{"id":"260e44bc-f99e-4e23-ba41-a2d2a89809d7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"59458b33-794b-46c2-beca-263af545a8dd","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"218c1ee2-4954-4eef-9d9e-a74c6c847597","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"218c1ee2-4954-4eef-9d9e-a74c6c847597","type":"BoxAnnotation"},"plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"}},"id":"6cfd4f3d-7e47-4552-89a6-6b95fed15cc2","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"159778eb-9a16-429b-9256-c0f921901818","type":"ColumnDataSource"},"glyph":{"id":"3be7cb3f-6e74-4a7b-8800-79cf96148d07","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e2b7ae7f-c873-4261-860b-4fd7fcd1b664","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"}},"id":"1b4d9a80-c6d9-4960-9139-203eaca118b1","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3be7cb3f-6e74-4a7b-8800-79cf96148d07","type":"Rect"},{"attributes":{"plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"}},"id":"1248b9ad-b5d0-4883-a4ae-1d42e24cea3a","type":"PanTool"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"983ef381-a532-487e-b3cc-037fc7dc4368","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"},"ticker":{"id":"0869b0fc-7101-40d8-b873-002979cb9f1b","type":"CategoricalTicker"}},"id":"3e74526a-130d-47dd-84e5-20ddc263659d","type":"CategoricalAxis"},{"attributes":{},"id":"6378dfe8-efea-41e2-8d6a-f96648cbc57a","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42ccab2b-7871-4188-9c7a-f60b966b9636","type":"Rect"},{"attributes":{"data_source":{"id":"29c1d56f-23fa-4f8e-aa44-fec33362acaa","type":"ColumnDataSource"},"glyph":{"id":"42ccab2b-7871-4188-9c7a-f60b966b9636","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"51328d57-e32a-4664-802f-6c227bc8befa","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"976a1253-e87a-4b4c-84be-2b0e810f33e2","type":"FactorRange"},{"attributes":{"callback":null,"end":6118.875},"id":"782d448b-9f59-467b-9436-8d25c253a6d7","type":"Range1d"},{"attributes":{"data_source":{"id":"48ee16d3-2165-4585-9f17-4d4f14ac03bb","type":"ColumnDataSource"},"glyph":{"id":"a051cdfe-6954-494b-afa1-4faf0cd1c7fa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6725bd72-d401-4393-8322-a9576d3b60d7","type":"GlyphRenderer"},{"attributes":{},"id":"983ef381-a532-487e-b3cc-037fc7dc4368","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"3e74526a-130d-47dd-84e5-20ddc263659d","type":"CategoricalAxis"}],"height":400,"left":[{"id":"29df87e0-69fc-4773-9c79-f8950d82bc53","type":"LinearAxis"}],"renderers":[{"id":"218c1ee2-4954-4eef-9d9e-a74c6c847597","type":"BoxAnnotation"},{"id":"e2b7ae7f-c873-4261-860b-4fd7fcd1b664","type":"GlyphRenderer"},{"id":"6725bd72-d401-4393-8322-a9576d3b60d7","type":"GlyphRenderer"},{"id":"51328d57-e32a-4664-802f-6c227bc8befa","type":"GlyphRenderer"},{"id":"59458b33-794b-46c2-beca-263af545a8dd","type":"GlyphRenderer"},{"id":"db60486e-4d15-4325-940b-e8e4f9aa6672","type":"GlyphRenderer"},{"id":"ea2c1174-a248-4518-9366-2362ec567816","type":"Legend"},{"id":"3e74526a-130d-47dd-84e5-20ddc263659d","type":"CategoricalAxis"},{"id":"29df87e0-69fc-4773-9c79-f8950d82bc53","type":"LinearAxis"},{"id":"f2af6a06-a9b6-475f-8aed-5e5c0fe66378","type":"Grid"}],"title":{"id":"c468b017-9320-411b-af71-b1304aa7fca9","type":"Title"},"tool_events":{"id":"c6eaf3c9-8b94-4990-b641-f2747102dbb1","type":"ToolEvents"},"toolbar":{"id":"34c27b10-b26a-4d62-af59-fe7d0fe034a9","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"976a1253-e87a-4b4c-84be-2b0e810f33e2","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"782d448b-9f59-467b-9436-8d25c253a6d7","type":"Range1d"}},"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#f22c40"],"cyl":[5],"fill_alpha":[0.8],"height":[82.1],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["5"],"y":[41.05]}},"id":"29c1d56f-23fa-4f8e-aa44-fec33362acaa","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"}},"id":"0d90a555-a55e-4791-b603-02f23f6078c4","type":"HelpTool"},{"attributes":{"plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"}},"id":"ef060e07-c9f2-4d4d-917f-15d60b1a1e27","type":"ResetTool"},{"attributes":{},"id":"0869b0fc-7101-40d8-b873-002979cb9f1b","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"260e44bc-f99e-4e23-ba41-a2d2a89809d7","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#f22c40"],"cyl":[6],"fill_alpha":[0.8],"height":[1657.8],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["6"],"y":[828.9]}},"id":"dbf71c01-0715-41cd-9656-f8fafd6cac17","type":"ColumnDataSource"},{"attributes":{},"id":"c6eaf3c9-8b94-4990-b641-f2747102dbb1","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1248b9ad-b5d0-4883-a4ae-1d42e24cea3a","type":"PanTool"},{"id":"1b4d9a80-c6d9-4960-9139-203eaca118b1","type":"WheelZoomTool"},{"id":"6cfd4f3d-7e47-4552-89a6-6b95fed15cc2","type":"BoxZoomTool"},{"id":"b8e11324-c561-4d94-bd06-bf177fee08d7","type":"SaveTool"},{"id":"ef060e07-c9f2-4d4d-917f-15d60b1a1e27","type":"ResetTool"},{"id":"0d90a555-a55e-4791-b603-02f23f6078c4","type":"HelpTool"}]},"id":"34c27b10-b26a-4d62-af59-fe7d0fe034a9","type":"Toolbar"},{"attributes":{"data_source":{"id":"3ac57218-457c-484c-b959-53cc7b8f5ab0","type":"ColumnDataSource"},"glyph":{"id":"893620a2-15cf-4fcc-b474-c287329621d5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"db60486e-4d15-4325-940b-e8e4f9aa6672","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Total MPG by CYL"},"id":"c468b017-9320-411b-af71-b1304aa7fca9","type":"Title"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[82.2],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["3"],"y":[41.1]}},"id":"159778eb-9a16-429b-9256-c0f921901818","type":"ColumnDataSource"},{"attributes":{},"id":"f287f05e-f2e6-4c0c-807d-5c7d99636024","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Sum( Mpg )","formatter":{"id":"f287f05e-f2e6-4c0c-807d-5c7d99636024","type":"BasicTickFormatter"},"plot":{"id":"90363c71-15cd-4bc6-95a4-e79bf30ebea3","subtype":"Chart","type":"Plot"},"ticker":{"id":"6378dfe8-efea-41e2-8d6a-f96648cbc57a","type":"BasicTicker"}},"id":"29df87e0-69fc-4773-9c79-f8950d82bc53","type":"LinearAxis"}],"root_ids":["90363c71-15cd-4bc6-95a4-e79bf30ebea3"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"7c1f640f-07fb-4d76-a5f0-d41e67fe4b6b","elementid":"a9618a37-1790-4858-899a-6ffd8680d56d","modelid":"90363c71-15cd-4bc6-95a4-e79bf30ebea3"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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