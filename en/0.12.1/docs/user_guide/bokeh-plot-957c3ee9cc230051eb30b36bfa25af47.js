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
      };var element = document.getElementById("de126003-e7f9-41a4-bfa4-79b2ba2740f8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'de126003-e7f9-41a4-bfa4-79b2ba2740f8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"7e0f10ed-d841-4e41-b90c-f6c3b8ef16a3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"171d8562-7451-40cb-ae72-a61962b7340c","type":"PanTool"},{"id":"a5ae6a9c-6308-4020-9f7f-74934e23b4b8","type":"WheelZoomTool"},{"id":"49ce4f6e-5515-46f8-a7b2-b0812af147b1","type":"BoxZoomTool"},{"id":"f347c4c7-b91d-46b9-ac3a-8b5aab05850e","type":"SaveTool"},{"id":"2f6d60f0-2893-40f0-b6ce-57089890c5bd","type":"ResetTool"},{"id":"5567966b-e5d8-4386-a21c-40d7ef0aecd4","type":"HelpTool"}]},"id":"e8e056cf-02d8-4b5a-b78f-836636980b37","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8498a8c8-54c4-4dbc-b9c6-2067b30af70a","type":"BasicTicker"}},"id":"2a508911-9e82-40d0-ba11-be8db317a3a8","type":"Grid"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"040b5d09-ea6a-4146-a41b-fe5812c3d398","type":"Label"},{"attributes":{"level":"glyph","plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"},"source":{"id":"facb109b-66fb-46cb-a27a-c3e4a0b8c593","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"1c81abb7-77d6-4a8d-8896-d0832bcac568","type":"LabelSet"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"ce4b0966-5a90-48a8-9f92-718352fbfb71","type":"BasicTickFormatter"},"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4b619bd-9443-4d8e-9211-58384a5dfba1","type":"BasicTicker"}},"id":"94b2507a-4be2-430e-98db-3da2a7303ad7","type":"LinearAxis"},{"attributes":{"callback":null,"end":275,"start":140},"id":"ced89dca-11f3-4b95-b7bd-14e8e1e4860d","type":"Range1d"},{"attributes":{"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4b619bd-9443-4d8e-9211-58384a5dfba1","type":"BasicTicker"}},"id":"fe8a7a0a-1e93-4ae4-bec6-72f3eb25f594","type":"Grid"},{"attributes":{"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"}},"id":"f347c4c7-b91d-46b9-ac3a-8b5aab05850e","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"094d350a-1073-42a2-9ecf-615a1b8a0fc6","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"094d350a-1073-42a2-9ecf-615a1b8a0fc6","type":"BoxAnnotation"},"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"}},"id":"49ce4f6e-5515-46f8-a7b2-b0812af147b1","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["names","weight","height"],"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]}},"id":"facb109b-66fb-46cb-a27a-c3e4a0b8c593","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"facb109b-66fb-46cb-a27a-c3e4a0b8c593","type":"ColumnDataSource"},"glyph":{"id":"41e8ba83-8ebe-48a3-b645-86c29ad2d6c9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d3a797a0-74af-45f6-8cb0-7128c4a60be5","type":"Circle"},"selection_glyph":null},"id":"af82b880-976d-47dc-935e-e99332ea7d38","type":"GlyphRenderer"},{"attributes":{},"id":"8498a8c8-54c4-4dbc-b9c6-2067b30af70a","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"f685eb43-1c54-4d8c-85e9-50119d7bec9c","type":"Title"},{"attributes":{"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"}},"id":"2f6d60f0-2893-40f0-b6ce-57089890c5bd","type":"ResetTool"},{"attributes":{"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"}},"id":"a5ae6a9c-6308-4020-9f7f-74934e23b4b8","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"d3a797a0-74af-45f6-8cb0-7128c4a60be5","type":"Circle"},{"attributes":{"below":[{"id":"94b2507a-4be2-430e-98db-3da2a7303ad7","type":"LinearAxis"}],"left":[{"id":"a2ee0fb8-0ef1-40a4-be23-0c30ce01b80e","type":"LinearAxis"}],"renderers":[{"id":"94b2507a-4be2-430e-98db-3da2a7303ad7","type":"LinearAxis"},{"id":"fe8a7a0a-1e93-4ae4-bec6-72f3eb25f594","type":"Grid"},{"id":"a2ee0fb8-0ef1-40a4-be23-0c30ce01b80e","type":"LinearAxis"},{"id":"2a508911-9e82-40d0-ba11-be8db317a3a8","type":"Grid"},{"id":"094d350a-1073-42a2-9ecf-615a1b8a0fc6","type":"BoxAnnotation"},{"id":"af82b880-976d-47dc-935e-e99332ea7d38","type":"GlyphRenderer"},{"id":"1c81abb7-77d6-4a8d-8896-d0832bcac568","type":"LabelSet"},{"id":"040b5d09-ea6a-4146-a41b-fe5812c3d398","type":"Label"}],"title":{"id":"f685eb43-1c54-4d8c-85e9-50119d7bec9c","type":"Title"},"tool_events":{"id":"06358bca-7f8d-46bc-885c-ebc21c10e6f3","type":"ToolEvents"},"toolbar":{"id":"e8e056cf-02d8-4b5a-b78f-836636980b37","type":"Toolbar"},"x_range":{"id":"ced89dca-11f3-4b95-b7bd-14e8e1e4860d","type":"Range1d"},"y_range":{"id":"226946c7-a009-4303-be2b-b95a6d4eaff1","type":"DataRange1d"}},"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7d562518-8afa-4749-9338-206a43d68f45","type":"BasicTickFormatter"},{"attributes":{},"id":"b4b619bd-9443-4d8e-9211-58384a5dfba1","type":"BasicTicker"},{"attributes":{"callback":null},"id":"226946c7-a009-4303-be2b-b95a6d4eaff1","type":"DataRange1d"},{"attributes":{"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"}},"id":"5567966b-e5d8-4386-a21c-40d7ef0aecd4","type":"HelpTool"},{"attributes":{},"id":"ce4b0966-5a90-48a8-9f92-718352fbfb71","type":"BasicTickFormatter"},{"attributes":{},"id":"06358bca-7f8d-46bc-885c-ebc21c10e6f3","type":"ToolEvents"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"7d562518-8afa-4749-9338-206a43d68f45","type":"BasicTickFormatter"},"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8498a8c8-54c4-4dbc-b9c6-2067b30af70a","type":"BasicTicker"}},"id":"a2ee0fb8-0ef1-40a4-be23-0c30ce01b80e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"41e8ba83-8ebe-48a3-b645-86c29ad2d6c9","type":"Circle"},{"attributes":{"plot":{"id":"9507006c-aeb4-4b6d-907e-fe1a9a520abb","subtype":"Figure","type":"Plot"}},"id":"171d8562-7451-40cb-ae72-a61962b7340c","type":"PanTool"}],"root_ids":["9507006c-aeb4-4b6d-907e-fe1a9a520abb"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"7e0f10ed-d841-4e41-b90c-f6c3b8ef16a3","elementid":"de126003-e7f9-41a4-bfa4-79b2ba2740f8","modelid":"9507006c-aeb4-4b6d-907e-fe1a9a520abb"}];
              
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