document.addEventListener("DOMContentLoaded", function(event) {
    
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
      };var element = document.getElementById("43cf61a6-e558-41a9-a477-d8609ad198db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '43cf61a6-e558-41a9-a477-d8609ad198db' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"95c7c8e9-d865-4b94-9c15-4da80496d6f5":{"roots":{"references":[{"attributes":{"axis_label":"Sum( Mpg )","formatter":{"id":"38c3263d-6d3b-4199-8221-43ecf644917a","type":"BasicTickFormatter"},"plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"},"ticker":{"id":"d37c1c9c-0175-423b-8ea3-313564c51651","type":"BasicTicker"}},"id":"5d7415dc-6889-4b16-ab92-8fab04dc8fed","type":"LinearAxis"},{"attributes":{"data_source":{"id":"16b1a310-e4b7-44f2-ba83-940e7c77c010","type":"ColumnDataSource"},"glyph":{"id":"79fbb6e2-c533-4853-9619-3057b753c1c0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9a3c0b2-9e2e-4eb0-8b54-53e4a17a92fa","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"}},"id":"fe05bb07-0d2a-48d6-8cf6-be65a8265910","type":"SaveTool"},{"attributes":{},"id":"d34ccb3d-c3be-44c3-ae23-f1eac34def7c","type":"CategoricalTicker"},{"attributes":{"callback":null,"end":6118.875},"id":"dd1649a3-f3b2-484c-90b2-98330f6c38ec","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"833a8c0c-bb65-4fe1-bcbd-e837c7cbffc3","type":"Rect"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"2670f744-3af2-4597-9978-1a5675a0f9a2","type":"FactorRange"},{"attributes":{},"id":"d37c1c9c-0175-423b-8ea3-313564c51651","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#f22c40"],"cyl":[4],"fill_alpha":[0.8],"height":[5827.5],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["4"],"y":[2913.75]}},"id":"02deeba8-b5b3-4925-bacc-56eb835b5e7b","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4ddbdb00-9912-4b34-ad82-e5ecec50d45c","type":"BoxAnnotation"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"94324cff-a61a-4609-8d98-444cad3ebf8f","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"},"ticker":{"id":"d34ccb3d-c3be-44c3-ae23-f1eac34def7c","type":"CategoricalTicker"}},"id":"8aa23487-ac76-492f-9284-45702e958e4a","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"}},"id":"e7d40516-4b24-4213-a3df-b747ad3fd647","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e7d40516-4b24-4213-a3df-b747ad3fd647","type":"PanTool"},{"id":"acde2174-ff8c-40a8-a402-5bc708712816","type":"WheelZoomTool"},{"id":"66bb0f82-4615-4fd4-a543-19eebc285f42","type":"BoxZoomTool"},{"id":"fe05bb07-0d2a-48d6-8cf6-be65a8265910","type":"SaveTool"},{"id":"3f30e022-44d6-4c43-ad88-2c45a8ff232e","type":"ResetTool"},{"id":"a9f9f41c-747d-4577-b063-4869eee86c37","type":"HelpTool"}]},"id":"d3baf6ab-9a71-4452-997d-c7622eed723b","type":"Toolbar"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e3bc403-cd20-44a1-b2ce-884943085ebc","type":"Rect"},{"attributes":{},"id":"38c3263d-6d3b-4199-8221-43ecf644917a","type":"BasicTickFormatter"},{"attributes":{"legends":[["3",[{"id":"d9a3c0b2-9e2e-4eb0-8b54-53e4a17a92fa","type":"GlyphRenderer"}]],["4",[{"id":"080206f8-e301-4265-9746-1bc1a1bb259f","type":"GlyphRenderer"}]],["5",[{"id":"ba667c20-0591-40af-a984-df50e806a114","type":"GlyphRenderer"}]],["6",[{"id":"16893769-e27e-4e8f-b11c-04f0ae523921","type":"GlyphRenderer"}]],["8",[{"id":"1ba082bd-8709-4198-b044-f719ece623a3","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"}},"id":"3fa30e61-065d-46a1-9cf8-617ba74f7757","type":"Legend"},{"attributes":{"plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"}},"id":"acde2174-ff8c-40a8-a402-5bc708712816","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"},"ticker":{"id":"d37c1c9c-0175-423b-8ea3-313564c51651","type":"BasicTicker"}},"id":"c09d9267-c874-402d-b75f-943733fca4d9","type":"Grid"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#f22c40"],"cyl":[5],"fill_alpha":[0.8],"height":[82.1],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["5"],"y":[41.05]}},"id":"0272296d-8a5d-4533-965a-ec20e85eb1af","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"02deeba8-b5b3-4925-bacc-56eb835b5e7b","type":"ColumnDataSource"},"glyph":{"id":"4e3bc403-cd20-44a1-b2ce-884943085ebc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"080206f8-e301-4265-9746-1bc1a1bb259f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"}},"id":"a9f9f41c-747d-4577-b063-4869eee86c37","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#f22c40"],"cyl":[8],"fill_alpha":[0.8],"height":[1541.1999999999998],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["8"],"y":[770.5999999999999]}},"id":"e66bac00-2ab3-43a0-b7e3-2db67c0a9323","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"}},"id":"3f30e022-44d6-4c43-ad88-2c45a8ff232e","type":"ResetTool"},{"attributes":{"below":[{"id":"8aa23487-ac76-492f-9284-45702e958e4a","type":"CategoricalAxis"}],"height":400,"left":[{"id":"5d7415dc-6889-4b16-ab92-8fab04dc8fed","type":"LinearAxis"}],"renderers":[{"id":"4ddbdb00-9912-4b34-ad82-e5ecec50d45c","type":"BoxAnnotation"},{"id":"d9a3c0b2-9e2e-4eb0-8b54-53e4a17a92fa","type":"GlyphRenderer"},{"id":"080206f8-e301-4265-9746-1bc1a1bb259f","type":"GlyphRenderer"},{"id":"ba667c20-0591-40af-a984-df50e806a114","type":"GlyphRenderer"},{"id":"16893769-e27e-4e8f-b11c-04f0ae523921","type":"GlyphRenderer"},{"id":"1ba082bd-8709-4198-b044-f719ece623a3","type":"GlyphRenderer"},{"id":"3fa30e61-065d-46a1-9cf8-617ba74f7757","type":"Legend"},{"id":"8aa23487-ac76-492f-9284-45702e958e4a","type":"CategoricalAxis"},{"id":"5d7415dc-6889-4b16-ab92-8fab04dc8fed","type":"LinearAxis"},{"id":"c09d9267-c874-402d-b75f-943733fca4d9","type":"Grid"}],"title":{"id":"4e551b0b-a5de-4d9f-838e-86122cbdf5be","type":"Title"},"tool_events":{"id":"b3a812fc-ac14-4c00-b55e-b49c1adac520","type":"ToolEvents"},"toolbar":{"id":"d3baf6ab-9a71-4452-997d-c7622eed723b","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"2670f744-3af2-4597-9978-1a5675a0f9a2","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"dd1649a3-f3b2-484c-90b2-98330f6c38ec","type":"Range1d"}},"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"b3a812fc-ac14-4c00-b55e-b49c1adac520","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Total MPG by CYL"},"id":"4e551b0b-a5de-4d9f-838e-86122cbdf5be","type":"Title"},{"attributes":{},"id":"94324cff-a61a-4609-8d98-444cad3ebf8f","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"73ed4a6a-536f-4c28-8003-8e721cde8120","type":"ColumnDataSource"},"glyph":{"id":"833a8c0c-bb65-4fe1-bcbd-e837c7cbffc3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"16893769-e27e-4e8f-b11c-04f0ae523921","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"4ddbdb00-9912-4b34-ad82-e5ecec50d45c","type":"BoxAnnotation"},"plot":{"id":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241","subtype":"Chart","type":"Plot"}},"id":"66bb0f82-4615-4fd4-a543-19eebc285f42","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"0272296d-8a5d-4533-965a-ec20e85eb1af","type":"ColumnDataSource"},"glyph":{"id":"2e556080-ecdc-4247-8b38-bd35cdc58616","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ba667c20-0591-40af-a984-df50e806a114","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"59469f1f-8713-444f-aa05-c322afd41533","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2e556080-ecdc-4247-8b38-bd35cdc58616","type":"Rect"},{"attributes":{"data_source":{"id":"e66bac00-2ab3-43a0-b7e3-2db67c0a9323","type":"ColumnDataSource"},"glyph":{"id":"59469f1f-8713-444f-aa05-c322afd41533","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1ba082bd-8709-4198-b044-f719ece623a3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#f22c40"],"cyl":[6],"fill_alpha":[0.8],"height":[1657.8],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["6"],"y":[828.9]}},"id":"73ed4a6a-536f-4c28-8003-8e721cde8120","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[82.2],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["3"],"y":[41.1]}},"id":"16b1a310-e4b7-44f2-ba83-940e7c77c010","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"79fbb6e2-c533-4853-9619-3057b753c1c0","type":"Rect"}],"root_ids":["0239ccf7-f5e9-4b78-b6ca-e93749a3a241"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"95c7c8e9-d865-4b94-9c15-4da80496d6f5","elementid":"43cf61a6-e558-41a9-a477-d8609ad198db","modelid":"0239ccf7-f5e9-4b78-b6ca-e93749a3a241"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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