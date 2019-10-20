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
      };var element = document.getElementById("8efd0cae-5cdc-4a65-99de-be48cf70ea6b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8efd0cae-5cdc-4a65-99de-be48cf70ea6b' but no matching script tag was found. ")
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
                var docs_json = {"c90fb865-ae5c-491c-a779-2f51f4133a12":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"db2bae42-8182-4415-8f86-e83c2d1e1886","type":"Circle"},{"attributes":{"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"}},"id":"9514ffff-30fb-4385-bdca-bd08d1117bc4","type":"HelpTool"},{"attributes":{"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"}},"id":"dfa28927-b883-4f8d-9fbf-70e0e42e0e19","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0bed01ee-e010-4d8c-8447-5aa02d401c58","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e0e1a692-e3e3-4d2f-8dba-dc4512739c8a","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"e0e1a692-e3e3-4d2f-8dba-dc4512739c8a","type":"BoxAnnotation"},"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"}},"id":"2d1eb342-be52-4ab5-ac53-7ccb73bd6873","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"753f1d9d-c5cb-4688-b380-ca7fb822a495","type":"ColumnDataSource"},"glyph":{"id":"db2bae42-8182-4415-8f86-e83c2d1e1886","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"0bed01ee-e010-4d8c-8447-5aa02d401c58","type":"Circle"},"selection_glyph":null},"id":"7d5467a3-a22e-463b-8d44-8a67ac5ef278","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"cd084063-5318-4bf0-a2cd-25fd432654ca","type":"BasicTickFormatter"},"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9795db86-8091-4212-bec8-2498aef4c7bf","type":"BasicTicker"}},"id":"f6ba2428-2b4a-4f12-a6ec-4eae6e5790c4","type":"LinearAxis"},{"attributes":{"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"}},"id":"6d05c873-70e8-4abb-8c2f-341f5d2c08d6","type":"SaveTool"},{"attributes":{"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf9f2729-6411-450f-9a30-0330f3dc3498","type":"BasicTicker"}},"id":"16a83628-0bae-4f0b-907a-93fbd8d3211b","type":"Grid"},{"attributes":{},"id":"97fce92f-8dc1-4921-9e43-46dcbbfa843b","type":"BasicTickFormatter"},{"attributes":{},"id":"cf9f2729-6411-450f-9a30-0330f3dc3498","type":"BasicTicker"},{"attributes":{},"id":"cd084063-5318-4bf0-a2cd-25fd432654ca","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"97fce92f-8dc1-4921-9e43-46dcbbfa843b","type":"BasicTickFormatter"},"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf9f2729-6411-450f-9a30-0330f3dc3498","type":"BasicTicker"}},"id":"6fa7c14f-71ed-48de-8490-43fc6978ab1d","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9795db86-8091-4212-bec8-2498aef4c7bf","type":"BasicTicker"}},"id":"3c07ef57-b5b0-40fc-b57d-098870c785fc","type":"Grid"},{"attributes":{},"id":"9795db86-8091-4212-bec8-2498aef4c7bf","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"6fa7c14f-71ed-48de-8490-43fc6978ab1d","type":"LinearAxis"}],"left":[{"id":"f6ba2428-2b4a-4f12-a6ec-4eae6e5790c4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6fa7c14f-71ed-48de-8490-43fc6978ab1d","type":"LinearAxis"},{"id":"16a83628-0bae-4f0b-907a-93fbd8d3211b","type":"Grid"},{"id":"f6ba2428-2b4a-4f12-a6ec-4eae6e5790c4","type":"LinearAxis"},{"id":"3c07ef57-b5b0-40fc-b57d-098870c785fc","type":"Grid"},{"id":"e0e1a692-e3e3-4d2f-8dba-dc4512739c8a","type":"BoxAnnotation"},{"id":"7d5467a3-a22e-463b-8d44-8a67ac5ef278","type":"GlyphRenderer"}],"title":{"id":"f02b80ef-c7cb-453d-9cd5-52583dc38bf5","type":"Title"},"tool_events":{"id":"ee2450eb-434d-4e93-aa39-00b63a861b71","type":"ToolEvents"},"toolbar":{"id":"0efc1f63-9c1a-4aa4-a033-8b7f1c520f08","type":"Toolbar"},"x_range":{"id":"1fea58f8-e496-4cc0-ae60-a41de4d573d5","type":"DataRange1d"},"y_range":{"id":"ddb88ba3-0f43-4293-ba06-871635cf547f","type":"DataRange1d"}},"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"ddb88ba3-0f43-4293-ba06-871635cf547f","type":"DataRange1d"},{"attributes":{"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"}},"id":"cb2a6cb5-050f-412b-b3c5-8b5ab38eeb54","type":"WheelZoomTool"},{"attributes":{},"id":"ee2450eb-434d-4e93-aa39-00b63a861b71","type":"ToolEvents"},{"attributes":{"plot":{"id":"4bbb784b-1c52-4394-ada4-badfdf4491e3","subtype":"Figure","type":"Plot"}},"id":"8d03993a-11cd-4db1-bc61-fdd01688de5e","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"f02b80ef-c7cb-453d-9cd5-52583dc38bf5","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8d03993a-11cd-4db1-bc61-fdd01688de5e","type":"PanTool"},{"id":"cb2a6cb5-050f-412b-b3c5-8b5ab38eeb54","type":"WheelZoomTool"},{"id":"2d1eb342-be52-4ab5-ac53-7ccb73bd6873","type":"BoxZoomTool"},{"id":"6d05c873-70e8-4abb-8c2f-341f5d2c08d6","type":"SaveTool"},{"id":"dfa28927-b883-4f8d-9fbf-70e0e42e0e19","type":"ResetTool"},{"id":"9514ffff-30fb-4385-bdca-bd08d1117bc4","type":"HelpTool"}]},"id":"0efc1f63-9c1a-4aa4-a033-8b7f1c520f08","type":"Toolbar"},{"attributes":{"callback":null},"id":"1fea58f8-e496-4cc0-ae60-a41de4d573d5","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"753f1d9d-c5cb-4688-b380-ca7fb822a495","type":"ColumnDataSource"}],"root_ids":["4bbb784b-1c52-4394-ada4-badfdf4491e3"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"c90fb865-ae5c-491c-a779-2f51f4133a12","elementid":"8efd0cae-5cdc-4a65-99de-be48cf70ea6b","modelid":"4bbb784b-1c52-4394-ada4-badfdf4491e3"}];
                
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
