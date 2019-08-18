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
      };var element = document.getElementById("b32cc04e-edac-423c-8b64-e2b47d77cfba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b32cc04e-edac-423c-8b64-e2b47d77cfba' but no matching script tag was found. ")
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
                  var docs_json = {"600a2153-ad6b-4c4c-8c92-890bcf6b414a":{"roots":{"references":[{"attributes":{},"id":"5791da4a-c986-49b4-8100-fae7e81d94c0","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"0066fb63-78fd-40b7-baff-b30e1b7f9155","type":"BasicTickFormatter"},"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"},"ticker":{"id":"e28449ec-e4c2-464a-a0b0-9a279ec1d859","type":"BasicTicker"}},"id":"4a194b91-c349-4605-afd0-c551a40407f0","type":"LinearAxis"},{"attributes":{"data_source":{"id":"94c05817-da72-4b37-8fcc-7d74b9dd896d","type":"ColumnDataSource"},"glyph":{"id":"646207a4-11c7-483c-9b2e-9022ef9b3b93","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"12444fea-ab7a-4c2b-b4c2-72821648d06f","type":"GlyphRenderer"},{"attributes":{"axis_label":"index","formatter":{"id":"5791da4a-c986-49b4-8100-fae7e81d94c0","type":"BasicTickFormatter"},"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"},"ticker":{"id":"e21ff17a-6c69-46bf-9e69-7dd1f0bbad3c","type":"BasicTicker"}},"id":"b8c4f979-c3ef-430f-9c31-291d167819bb","type":"LinearAxis"},{"attributes":{},"id":"e28449ec-e4c2-464a-a0b0-9a279ec1d859","type":"BasicTicker"},{"attributes":{"data_source":{"id":"97886918-880a-488c-956b-891bbd071d47","type":"ColumnDataSource"},"glyph":{"id":"c6df6a50-772b-49b5-a570-2b4602e59d62","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"828492e0-debc-4006-8e0a-e55122b8fd92","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"b8c4f979-c3ef-430f-9c31-291d167819bb","type":"LinearAxis"}],"height":400,"left":[{"id":"4a194b91-c349-4605-afd0-c551a40407f0","type":"LinearAxis"}],"renderers":[{"id":"6e28f9c9-c4ce-45d4-ac3d-11416a09863d","type":"BoxAnnotation"},{"id":"12444fea-ab7a-4c2b-b4c2-72821648d06f","type":"GlyphRenderer"},{"id":"828492e0-debc-4006-8e0a-e55122b8fd92","type":"GlyphRenderer"},{"id":"035bae60-2f1d-48d9-9fbb-f616fdc35c51","type":"Legend"},{"id":"b8c4f979-c3ef-430f-9c31-291d167819bb","type":"LinearAxis"},{"id":"4a194b91-c349-4605-afd0-c551a40407f0","type":"LinearAxis"},{"id":"a340c147-e5e2-4e2c-9aa8-2730ec77d678","type":"Grid"},{"id":"6ef70d73-81ce-4d35-82e1-29ba48ebf872","type":"Grid"}],"title":{"id":"0493a74e-0fe9-4e1d-9c37-f95bd87ab680","type":"Title"},"tool_events":{"id":"b57c7d53-8441-4214-93f7-31975bc79ebe","type":"ToolEvents"},"toolbar":{"id":"c9b1c58e-732b-4d07-92c5-c618b50bae70","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"096bc6b8-62ef-4636-8fd4-76b834fbe0db","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"58e02883-6e15-4028-a046-a141826abbd4","type":"Range1d"}},"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"}},"id":"f1087642-03cf-4058-9933-61394617cb46","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d57cfb8d-b58b-4cad-b6f2-6888de87b973","type":"PanTool"},{"id":"d925b7f3-6935-4215-bca9-07196208091a","type":"WheelZoomTool"},{"id":"6a4d6a41-6f52-4a70-b1d2-95df97e2e544","type":"BoxZoomTool"},{"id":"bfed18b9-1f56-4232-8376-531750561f80","type":"SaveTool"},{"id":"63b6bea5-49f2-424f-a28a-4a7bd628bc1f","type":"ResetTool"},{"id":"f1087642-03cf-4058-9933-61394617cb46","type":"HelpTool"}]},"id":"c9b1c58e-732b-4d07-92c5-c618b50bae70","type":"Toolbar"},{"attributes":{},"id":"e21ff17a-6c69-46bf-9e69-7dd1f0bbad3c","type":"BasicTicker"},{"attributes":{"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"}},"id":"d57cfb8d-b58b-4cad-b6f2-6888de87b973","type":"PanTool"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"646207a4-11c7-483c-9b2e-9022ef9b3b93","type":"Line"},{"attributes":{"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"}},"id":"bfed18b9-1f56-4232-8376-531750561f80","type":"SaveTool"},{"attributes":{},"id":"0066fb63-78fd-40b7-baff-b30e1b7f9155","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"97886918-880a-488c-956b-891bbd071d47","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"58e02883-6e15-4028-a046-a141826abbd4","type":"Range1d"},{"attributes":{},"id":"b57c7d53-8441-4214-93f7-31975bc79ebe","type":"ToolEvents"},{"attributes":{"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"}},"id":"63b6bea5-49f2-424f-a28a-4a7bd628bc1f","type":"ResetTool"},{"attributes":{"overlay":{"id":"6e28f9c9-c4ce-45d4-ac3d-11416a09863d","type":"BoxAnnotation"},"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"}},"id":"6a4d6a41-6f52-4a70-b1d2-95df97e2e544","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"},"ticker":{"id":"e28449ec-e4c2-464a-a0b0-9a279ec1d859","type":"BasicTicker"}},"id":"6ef70d73-81ce-4d35-82e1-29ba48ebf872","type":"Grid"},{"attributes":{"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"}},"id":"d925b7f3-6935-4215-bca9-07196208091a","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"096bc6b8-62ef-4636-8fd4-76b834fbe0db","type":"Range1d"},{"attributes":{"legends":[["stamp",[{"id":"12444fea-ab7a-4c2b-b4c2-72821648d06f","type":"GlyphRenderer"}]],["postcard",[{"id":"828492e0-debc-4006-8e0a-e55122b8fd92","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"}},"id":"035bae60-2f1d-48d9-9fbb-f616fdc35c51","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6e28f9c9-c4ce-45d4-ac3d-11416a09863d","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"0493a74e-0fe9-4e1d-9c37-f95bd87ab680","type":"Title"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"94c05817-da72-4b37-8fcc-7d74b9dd896d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c9afd313-efad-477b-9a72-c9f3fc7f7836","subtype":"Chart","type":"Plot"},"ticker":{"id":"e21ff17a-6c69-46bf-9e69-7dd1f0bbad3c","type":"BasicTicker"}},"id":"a340c147-e5e2-4e2c-9aa8-2730ec77d678","type":"Grid"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"c6df6a50-772b-49b5-a570-2b4602e59d62","type":"Line"}],"root_ids":["c9afd313-efad-477b-9a72-c9f3fc7f7836"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"600a2153-ad6b-4c4c-8c92-890bcf6b414a","elementid":"b32cc04e-edac-423c-8b64-e2b47d77cfba","modelid":"c9afd313-efad-477b-9a72-c9f3fc7f7836"}];
                  
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