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
      };var element = document.getElementById("d96a7408-1d54-42c8-bf79-357c621c6e29");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd96a7408-1d54-42c8-bf79-357c621c6e29' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"f0a6ce6a-888b-4132-820f-58d62eac33c8":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a05274ac-b1e7-4d81-b40b-91e5ac13e358","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"}},"id":"b35b5700-0b33-4338-89f8-c3a898d20a67","type":"ResetTool"},{"attributes":{},"id":"d6047e97-f16c-4898-9e7f-4940d1c14042","type":"BasicTicker"},{"attributes":{"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"daf16d5c-3ee8-4957-a963-2c3ff8abf1d9","type":"BasicTicker"}},"id":"8acaa835-da25-4ac0-a7a4-51efe8ca1def","type":"Grid"},{"attributes":{"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"}},"id":"8605fd56-f1f2-4f89-ad51-e8060280e953","type":"SaveTool"},{"attributes":{"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"}},"id":"1e1571d6-258f-4336-b8a4-7915db71a55b","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"db57f88b-9cb1-41a5-99ba-17b37b4ccf5b","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6047e97-f16c-4898-9e7f-4940d1c14042","type":"BasicTicker"}},"id":"8d5e7def-b4a5-4133-be75-f0ab6443f228","type":"Grid"},{"attributes":{},"id":"daf16d5c-3ee8-4957-a963-2c3ff8abf1d9","type":"BasicTicker"},{"attributes":{"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"}},"id":"53b87a43-0925-4c6a-a401-fad43f30a081","type":"WheelZoomTool"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"28254ec3-2638-49a7-b5ac-79d4432e1c4d","type":"Label"},{"attributes":{"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"}},"id":"557743e6-ad9d-4d60-8670-3a8748298d1a","type":"HelpTool"},{"attributes":{},"id":"81f88230-9e4a-4003-877c-98a75345e4a3","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"1e58c5e6-498c-4fcb-83ec-d7224182712b","type":"Circle"},{"attributes":{"callback":null,"column_names":["names","height","weight"],"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]}},"id":"82407530-4cdf-43b3-8ccc-ba834bd7a717","type":"ColumnDataSource"},{"attributes":{"level":"glyph","plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"},"source":{"id":"82407530-4cdf-43b3-8ccc-ba834bd7a717","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"ba2ef265-2fa5-4482-bea2-e1a0de30b084","type":"LabelSet"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"2a44f899-9906-44ef-bcfe-b5fada43cc27","type":"BasicTickFormatter"},"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"daf16d5c-3ee8-4957-a963-2c3ff8abf1d9","type":"BasicTicker"}},"id":"fafa5852-a6b4-40c6-9a9e-11378f6a5ac6","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1e1571d6-258f-4336-b8a4-7915db71a55b","type":"PanTool"},{"id":"53b87a43-0925-4c6a-a401-fad43f30a081","type":"WheelZoomTool"},{"id":"bf2ae8d2-4dfd-485f-a299-8bca41e1b610","type":"BoxZoomTool"},{"id":"8605fd56-f1f2-4f89-ad51-e8060280e953","type":"SaveTool"},{"id":"b35b5700-0b33-4338-89f8-c3a898d20a67","type":"ResetTool"},{"id":"557743e6-ad9d-4d60-8670-3a8748298d1a","type":"HelpTool"}]},"id":"7cc16232-ed82-4343-9035-3062ee34f5b1","type":"Toolbar"},{"attributes":{"callback":null,"end":275,"start":140},"id":"78bb207c-6b3a-4b61-b818-a1da7b62096a","type":"Range1d"},{"attributes":{},"id":"d05ce009-3b7e-4909-a160-52a8a0bde8ff","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"d05ce009-3b7e-4909-a160-52a8a0bde8ff","type":"BasicTickFormatter"},"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6047e97-f16c-4898-9e7f-4940d1c14042","type":"BasicTicker"}},"id":"94b83b66-d6d1-432f-826a-1e1e55b711b9","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"570720e4-46fc-497e-aee1-96c5c225ce4d","type":"Title"},{"attributes":{"callback":null},"id":"a15c5cba-64f4-4b59-8dbe-619c8c2d625b","type":"DataRange1d"},{"attributes":{"below":[{"id":"fafa5852-a6b4-40c6-9a9e-11378f6a5ac6","type":"LinearAxis"}],"left":[{"id":"94b83b66-d6d1-432f-826a-1e1e55b711b9","type":"LinearAxis"}],"renderers":[{"id":"fafa5852-a6b4-40c6-9a9e-11378f6a5ac6","type":"LinearAxis"},{"id":"8acaa835-da25-4ac0-a7a4-51efe8ca1def","type":"Grid"},{"id":"94b83b66-d6d1-432f-826a-1e1e55b711b9","type":"LinearAxis"},{"id":"8d5e7def-b4a5-4133-be75-f0ab6443f228","type":"Grid"},{"id":"a05274ac-b1e7-4d81-b40b-91e5ac13e358","type":"BoxAnnotation"},{"id":"5d8ebfcb-d501-4da6-875d-97b386a84b39","type":"GlyphRenderer"},{"id":"ba2ef265-2fa5-4482-bea2-e1a0de30b084","type":"LabelSet"},{"id":"28254ec3-2638-49a7-b5ac-79d4432e1c4d","type":"Label"}],"title":{"id":"570720e4-46fc-497e-aee1-96c5c225ce4d","type":"Title"},"tool_events":{"id":"81f88230-9e4a-4003-877c-98a75345e4a3","type":"ToolEvents"},"toolbar":{"id":"7cc16232-ed82-4343-9035-3062ee34f5b1","type":"Toolbar"},"x_range":{"id":"78bb207c-6b3a-4b61-b818-a1da7b62096a","type":"Range1d"},"y_range":{"id":"a15c5cba-64f4-4b59-8dbe-619c8c2d625b","type":"DataRange1d"}},"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"82407530-4cdf-43b3-8ccc-ba834bd7a717","type":"ColumnDataSource"},"glyph":{"id":"db57f88b-9cb1-41a5-99ba-17b37b4ccf5b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"1e58c5e6-498c-4fcb-83ec-d7224182712b","type":"Circle"},"selection_glyph":null},"id":"5d8ebfcb-d501-4da6-875d-97b386a84b39","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"a05274ac-b1e7-4d81-b40b-91e5ac13e358","type":"BoxAnnotation"},"plot":{"id":"d11f5917-95de-4def-adb5-4fb61a2d37ef","subtype":"Figure","type":"Plot"}},"id":"bf2ae8d2-4dfd-485f-a299-8bca41e1b610","type":"BoxZoomTool"},{"attributes":{},"id":"2a44f899-9906-44ef-bcfe-b5fada43cc27","type":"BasicTickFormatter"}],"root_ids":["d11f5917-95de-4def-adb5-4fb61a2d37ef"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"f0a6ce6a-888b-4132-820f-58d62eac33c8","elementid":"d96a7408-1d54-42c8-bf79-357c621c6e29","modelid":"d11f5917-95de-4def-adb5-4fb61a2d37ef"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
