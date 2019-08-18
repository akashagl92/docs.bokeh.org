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
      };var element = document.getElementById("259111a6-8c40-4a11-8ddb-efb8746c084a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '259111a6-8c40-4a11-8ddb-efb8746c084a' but no matching script tag was found. ")
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
                  var docs_json = {"7db7cf9e-a614-435d-83b4-cd96bd549d3c":{"roots":{"references":[{"attributes":{},"id":"1ea8c1cb-cf86-4209-8f27-a26235376dee","type":"BasicTicker"},{"attributes":{},"id":"197d1b8d-6dc4-42bb-81b8-34c6a32f5986","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"0af45c02-0d16-4a3b-950b-4d2e02d84c09","type":"Range1d"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"98bbd3a7-cf45-4986-a606-2ff8155c8737","type":"Line"},{"attributes":{"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"}},"id":"585dfebc-94f4-4c66-95fc-fcd7e2ef187d","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5bfe8972-dd04-40fc-9b1e-b30b12b9723a","type":"PanTool"},{"id":"dd8f10e4-cea7-458a-8d36-037a6aef8767","type":"WheelZoomTool"},{"id":"058a3070-dd37-4c19-9c36-e10a1dab7512","type":"BoxZoomTool"},{"id":"1cade365-ddd0-436f-8a77-01daa26f55f3","type":"SaveTool"},{"id":"ee3b2e9b-990f-424d-8dfb-a6d367727a35","type":"ResetTool"},{"id":"585dfebc-94f4-4c66-95fc-fcd7e2ef187d","type":"HelpTool"}]},"id":"9e3f45b1-dede-4918-a56c-ab64f35b35da","type":"Toolbar"},{"attributes":{"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"}},"id":"dd8f10e4-cea7-458a-8d36-037a6aef8767","type":"WheelZoomTool"},{"attributes":{},"id":"3093919e-703d-4e58-a344-ed34433d18e4","type":"BasicTickFormatter"},{"attributes":{},"id":"b577876f-590b-4c64-8e0f-229612e0bc1c","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"},"ticker":{"id":"1ea8c1cb-cf86-4209-8f27-a26235376dee","type":"BasicTicker"}},"id":"2508bd84-4038-45be-8c33-53a0bcefadfa","type":"Grid"},{"attributes":{"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"}},"id":"5bfe8972-dd04-40fc-9b1e-b30b12b9723a","type":"PanTool"},{"attributes":{"axis_label":"index","formatter":{"id":"197d1b8d-6dc4-42bb-81b8-34c6a32f5986","type":"BasicTickFormatter"},"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"},"ticker":{"id":"abdb5931-b4b7-4d0c-a46c-8177e568d8c8","type":"BasicTicker"}},"id":"6b5f5f67-615b-4a9b-bba4-5b0b2fb5f17c","type":"LinearAxis"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"fe9c6af5-144f-4042-93d8-ebda1daa3239","type":"Title"},{"attributes":{"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"}},"id":"ee3b2e9b-990f-424d-8dfb-a6d367727a35","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"6fddfe88-95ec-4433-88a3-b5227acd607c","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"7708b85e-0072-440c-a547-9a9086820e69","type":"Line"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"748f9ab5-8495-4c65-a95e-3e7342a221b6","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b09dbccc-16c5-4afa-87bb-0bd1d5f0c357","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"}},"id":"1cade365-ddd0-436f-8a77-01daa26f55f3","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"7d995d4b-602a-4a0f-8908-12f3438100cf","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7d995d4b-602a-4a0f-8908-12f3438100cf","type":"ColumnDataSource"},"glyph":{"id":"7708b85e-0072-440c-a547-9a9086820e69","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f1261e7b-13f5-4093-8ca3-65397ad1b84b","type":"GlyphRenderer"},{"attributes":{"legends":[["stamp",[{"id":"df0d863f-6bfd-48dc-93ba-773ab55eee45","type":"GlyphRenderer"}]],["postcard",[{"id":"f1261e7b-13f5-4093-8ca3-65397ad1b84b","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"}},"id":"1c473a67-7067-4a15-a1bd-db1a3c3f8128","type":"Legend"},{"attributes":{},"id":"abdb5931-b4b7-4d0c-a46c-8177e568d8c8","type":"BasicTicker"},{"attributes":{"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"},"ticker":{"id":"abdb5931-b4b7-4d0c-a46c-8177e568d8c8","type":"BasicTicker"}},"id":"645afc08-3b1b-413e-891f-2b76b5fecde5","type":"Grid"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"3093919e-703d-4e58-a344-ed34433d18e4","type":"BasicTickFormatter"},"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"},"ticker":{"id":"1ea8c1cb-cf86-4209-8f27-a26235376dee","type":"BasicTicker"}},"id":"9583fbd1-0554-4157-a23d-6b28c8d826af","type":"LinearAxis"},{"attributes":{"overlay":{"id":"b09dbccc-16c5-4afa-87bb-0bd1d5f0c357","type":"BoxAnnotation"},"plot":{"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"}},"id":"058a3070-dd37-4c19-9c36-e10a1dab7512","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"6b5f5f67-615b-4a9b-bba4-5b0b2fb5f17c","type":"LinearAxis"}],"height":400,"left":[{"id":"9583fbd1-0554-4157-a23d-6b28c8d826af","type":"LinearAxis"}],"renderers":[{"id":"b09dbccc-16c5-4afa-87bb-0bd1d5f0c357","type":"BoxAnnotation"},{"id":"df0d863f-6bfd-48dc-93ba-773ab55eee45","type":"GlyphRenderer"},{"id":"f1261e7b-13f5-4093-8ca3-65397ad1b84b","type":"GlyphRenderer"},{"id":"1c473a67-7067-4a15-a1bd-db1a3c3f8128","type":"Legend"},{"id":"6b5f5f67-615b-4a9b-bba4-5b0b2fb5f17c","type":"LinearAxis"},{"id":"9583fbd1-0554-4157-a23d-6b28c8d826af","type":"LinearAxis"},{"id":"645afc08-3b1b-413e-891f-2b76b5fecde5","type":"Grid"},{"id":"2508bd84-4038-45be-8c33-53a0bcefadfa","type":"Grid"}],"title":{"id":"fe9c6af5-144f-4042-93d8-ebda1daa3239","type":"Title"},"tool_events":{"id":"b577876f-590b-4c64-8e0f-229612e0bc1c","type":"ToolEvents"},"toolbar":{"id":"9e3f45b1-dede-4918-a56c-ab64f35b35da","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"748f9ab5-8495-4c65-a95e-3e7342a221b6","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0af45c02-0d16-4a3b-950b-4d2e02d84c09","type":"Range1d"}},"id":"f39878f6-edd8-46ac-9d53-5e2493b00465","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"6fddfe88-95ec-4433-88a3-b5227acd607c","type":"ColumnDataSource"},"glyph":{"id":"98bbd3a7-cf45-4986-a606-2ff8155c8737","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"df0d863f-6bfd-48dc-93ba-773ab55eee45","type":"GlyphRenderer"}],"root_ids":["f39878f6-edd8-46ac-9d53-5e2493b00465"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"7db7cf9e-a614-435d-83b4-cd96bd549d3c","elementid":"259111a6-8c40-4a11-8ddb-efb8746c084a","modelid":"f39878f6-edd8-46ac-9d53-5e2493b00465"}];
                  
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