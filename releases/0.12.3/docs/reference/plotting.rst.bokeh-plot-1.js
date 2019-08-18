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
      };var element = document.getElementById("1a48057a-711c-4e86-a4d4-f87b82c3c13b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1a48057a-711c-4e86-a4d4-f87b82c3c13b' but no matching script tag was found. ")
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
                  var docs_json = {"fd9074c2-facd-4822-8417-2468c9f8d46c":{"roots":{"references":[{"attributes":{"formatter":{"id":"7ae96034-644d-463f-af53-5671bc6120c6","type":"BasicTickFormatter"},"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ee2939a-c287-4451-8561-36111db7c6ae","type":"BasicTicker"}},"id":"2284b84e-28c5-455b-a029-70b5baa8d76f","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1cc5c36f-22ad-42bb-94cc-7db65b3a4028","type":"DataRange1d"},{"attributes":{},"id":"2f63edf8-c474-43b8-8999-115151666ebf","type":"BasicTicker"},{"attributes":{},"id":"7ae96034-644d-463f-af53-5671bc6120c6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"}},"id":"8a14d330-5927-4e5e-adb0-981920b5b7d0","type":"SaveTool"},{"attributes":{"formatter":{"id":"2499d7ee-2248-4029-9489-dfac37afa341","type":"BasicTickFormatter"},"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f63edf8-c474-43b8-8999-115151666ebf","type":"BasicTicker"}},"id":"15f6cbb4-23c8-4406-a385-7bd49d964785","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e3825bb0-8ebc-4f61-9795-70977c73a5ff","type":"PanTool"},{"id":"3461a42e-f564-46ac-a464-f4c752434ac9","type":"WheelZoomTool"},{"id":"d11ca6cb-1722-4e9a-8a0e-65be745d85a1","type":"BoxZoomTool"},{"id":"8a14d330-5927-4e5e-adb0-981920b5b7d0","type":"SaveTool"},{"id":"6f9f4434-1f13-4d8c-938c-a7b318d24c66","type":"ResetTool"},{"id":"91e53961-064a-498f-8c0c-7c231f931af2","type":"HelpTool"}]},"id":"e37855ce-4ecc-44a0-a80d-4859a7ffef83","type":"Toolbar"},{"attributes":{"overlay":{"id":"ec18736d-42bc-44d5-9da8-79a0d52f6b3d","type":"BoxAnnotation"},"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"}},"id":"d11ca6cb-1722-4e9a-8a0e-65be745d85a1","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"38eac743-c646-4b43-b320-45b9962b4403","type":"DataRange1d"},{"attributes":{},"id":"2499d7ee-2248-4029-9489-dfac37afa341","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ee2939a-c287-4451-8561-36111db7c6ae","type":"BasicTicker"}},"id":"ce5636b3-a264-4ee8-badb-def034b968cb","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec18736d-42bc-44d5-9da8-79a0d52f6b3d","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"815da27d-cb1d-43ac-b7fb-8dde68a2fe11","type":"Asterisk"},{"attributes":{"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"}},"id":"91e53961-064a-498f-8c0c-7c231f931af2","type":"HelpTool"},{"attributes":{"plot":null,"text":null},"id":"f7c38d3d-35d4-4f58-bbe1-ddb5419db2b7","type":"Title"},{"attributes":{},"id":"5ee2939a-c287-4451-8561-36111db7c6ae","type":"BasicTicker"},{"attributes":{"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"}},"id":"6f9f4434-1f13-4d8c-938c-a7b318d24c66","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f63edf8-c474-43b8-8999-115151666ebf","type":"BasicTicker"}},"id":"f16035e9-8675-4e01-8abd-c3925e9f8171","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a667c894-3a98-4c80-b989-23826b02afcc","type":"Asterisk"},{"attributes":{},"id":"141fadc3-6dce-4f87-ad48-f0f184bbee2a","type":"ToolEvents"},{"attributes":{"below":[{"id":"2284b84e-28c5-455b-a029-70b5baa8d76f","type":"LinearAxis"}],"left":[{"id":"15f6cbb4-23c8-4406-a385-7bd49d964785","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2284b84e-28c5-455b-a029-70b5baa8d76f","type":"LinearAxis"},{"id":"ce5636b3-a264-4ee8-badb-def034b968cb","type":"Grid"},{"id":"15f6cbb4-23c8-4406-a385-7bd49d964785","type":"LinearAxis"},{"id":"f16035e9-8675-4e01-8abd-c3925e9f8171","type":"Grid"},{"id":"ec18736d-42bc-44d5-9da8-79a0d52f6b3d","type":"BoxAnnotation"},{"id":"d731278a-ad8c-48e4-b053-085e6f610987","type":"GlyphRenderer"}],"title":{"id":"f7c38d3d-35d4-4f58-bbe1-ddb5419db2b7","type":"Title"},"tool_events":{"id":"141fadc3-6dce-4f87-ad48-f0f184bbee2a","type":"ToolEvents"},"toolbar":{"id":"e37855ce-4ecc-44a0-a80d-4859a7ffef83","type":"Toolbar"},"x_range":{"id":"38eac743-c646-4b43-b320-45b9962b4403","type":"DataRange1d"},"y_range":{"id":"1cc5c36f-22ad-42bb-94cc-7db65b3a4028","type":"DataRange1d"}},"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"0e3e32fe-3982-4ab4-a938-4d19db8c2782","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0e3e32fe-3982-4ab4-a938-4d19db8c2782","type":"ColumnDataSource"},"glyph":{"id":"815da27d-cb1d-43ac-b7fb-8dde68a2fe11","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":{"id":"a667c894-3a98-4c80-b989-23826b02afcc","type":"Asterisk"},"selection_glyph":null},"id":"d731278a-ad8c-48e4-b053-085e6f610987","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"}},"id":"3461a42e-f564-46ac-a464-f4c752434ac9","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"a9f2621a-44a8-45be-90e6-2670878f10d9","subtype":"Figure","type":"Plot"}},"id":"e3825bb0-8ebc-4f61-9795-70977c73a5ff","type":"PanTool"}],"root_ids":["a9f2621a-44a8-45be-90e6-2670878f10d9"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"fd9074c2-facd-4822-8417-2468c9f8d46c","elementid":"1a48057a-711c-4e86-a4d4-f87b82c3c13b","modelid":"a9f2621a-44a8-45be-90e6-2670878f10d9"}];
                  
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