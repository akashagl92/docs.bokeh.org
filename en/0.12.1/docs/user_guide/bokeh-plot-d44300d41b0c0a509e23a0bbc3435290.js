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
      };var element = document.getElementById("4cb2b663-0615-4a9e-8fd9-92f6a68aa833");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4cb2b663-0615-4a9e-8fd9-92f6a68aa833' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"656028ba-c35f-4b7b-b70e-50f8a28e2559":{"roots":{"references":[{"attributes":{"callback":null},"id":"43a94608-e069-44f2-8c41-c5841dbfb4d5","type":"DataRange1d"},{"attributes":{},"id":"65a60519-731b-4fd0-8b8d-7b31b5e3067f","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29a80c44-080b-4ea1-89b7-ecc006f7fa8a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"}},"id":"27a1db02-414a-4d5d-9185-762516a733c8","type":"PanTool"},{"attributes":{"plot":null,"text":"Left Title"},"id":"cc00c33f-c971-4b7b-8b7d-586a2f9ef4f1","type":"Title"},{"attributes":{"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"}},"id":"38334f6e-ee3f-44f4-9fb1-9bf6b30df522","type":"SaveTool"},{"attributes":{"data_source":{"id":"1224b9c4-31d4-4af2-9308-5aea2e039174","type":"ColumnDataSource"},"glyph":{"id":"ffd6add4-e4fe-4939-9121-a3ede34aad3b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"9679de04-1d47-49a1-9aa2-4f6d87f58db0","type":"Circle"},"selection_glyph":null},"id":"a81dc11d-16f9-4560-8ee5-aaf4bd33d08d","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"29a80c44-080b-4ea1-89b7-ecc006f7fa8a","type":"BoxAnnotation"},"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"}},"id":"4db64eb1-df21-49a1-927b-efcd53058e16","type":"BoxZoomTool"},{"attributes":{},"id":"708bf3ff-d7f0-422d-bfca-26bae8f5765d","type":"BasicTickFormatter"},{"attributes":{},"id":"0fa0fece-5b96-403f-8431-a1bbac580aaf","type":"BasicTickFormatter"},{"attributes":{},"id":"cfb0efc9-8b71-4164-950c-b74248d9c4a3","type":"BasicTicker"},{"attributes":{"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"}},"id":"2737b6fd-e2a1-4fca-ad23-3bf07d2945e3","type":"WheelZoomTool"},{"attributes":{"align":"center","plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"db2cdc78-1b02-4af5-8b11-5b185215267b","type":"Title"},{"attributes":{"formatter":{"id":"708bf3ff-d7f0-422d-bfca-26bae8f5765d","type":"BasicTickFormatter"},"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"},"ticker":{"id":"65a60519-731b-4fd0-8b8d-7b31b5e3067f","type":"BasicTicker"}},"id":"535bbeb2-e220-4b50-bcb0-2198c8a8fe06","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9679de04-1d47-49a1-9aa2-4f6d87f58db0","type":"Circle"},{"attributes":{"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfb0efc9-8b71-4164-950c-b74248d9c4a3","type":"BasicTicker"}},"id":"d247a2ac-68c4-4e71-9605-eaef0c646884","type":"Grid"},{"attributes":{"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"}},"id":"dd6d5f2c-0ef8-4d29-9be5-97b3ef324f36","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"1224b9c4-31d4-4af2-9308-5aea2e039174","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"0fa0fece-5b96-403f-8431-a1bbac580aaf","type":"BasicTickFormatter"},"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfb0efc9-8b71-4164-950c-b74248d9c4a3","type":"BasicTicker"}},"id":"5940c503-3426-4523-a476-7e0f525ccdc5","type":"LinearAxis"},{"attributes":{"callback":null},"id":"d077eec0-8b12-41d6-a57a-b65fe9faa986","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"},"ticker":{"id":"65a60519-731b-4fd0-8b8d-7b31b5e3067f","type":"BasicTicker"}},"id":"7b1d7786-bfc3-414f-924b-f580ccf5321d","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ffd6add4-e4fe-4939-9121-a3ede34aad3b","type":"Circle"},{"attributes":{},"id":"14007017-9b97-4508-bb87-f842c6f037d9","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"27a1db02-414a-4d5d-9185-762516a733c8","type":"PanTool"},{"id":"2737b6fd-e2a1-4fca-ad23-3bf07d2945e3","type":"WheelZoomTool"},{"id":"4db64eb1-df21-49a1-927b-efcd53058e16","type":"BoxZoomTool"},{"id":"38334f6e-ee3f-44f4-9fb1-9bf6b30df522","type":"SaveTool"},{"id":"dd6d5f2c-0ef8-4d29-9be5-97b3ef324f36","type":"ResetTool"},{"id":"b7a07695-b814-45ae-801f-5671efdd23f6","type":"HelpTool"}]},"id":"791da07c-7f3a-4c04-837d-c8715fe13b6f","type":"Toolbar"},{"attributes":{"plot":{"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"}},"id":"b7a07695-b814-45ae-801f-5671efdd23f6","type":"HelpTool"},{"attributes":{"below":[{"id":"5940c503-3426-4523-a476-7e0f525ccdc5","type":"LinearAxis"},{"id":"db2cdc78-1b02-4af5-8b11-5b185215267b","type":"Title"}],"left":[{"id":"535bbeb2-e220-4b50-bcb0-2198c8a8fe06","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5940c503-3426-4523-a476-7e0f525ccdc5","type":"LinearAxis"},{"id":"d247a2ac-68c4-4e71-9605-eaef0c646884","type":"Grid"},{"id":"535bbeb2-e220-4b50-bcb0-2198c8a8fe06","type":"LinearAxis"},{"id":"7b1d7786-bfc3-414f-924b-f580ccf5321d","type":"Grid"},{"id":"29a80c44-080b-4ea1-89b7-ecc006f7fa8a","type":"BoxAnnotation"},{"id":"a81dc11d-16f9-4560-8ee5-aaf4bd33d08d","type":"GlyphRenderer"},{"id":"db2cdc78-1b02-4af5-8b11-5b185215267b","type":"Title"}],"title":{"id":"cc00c33f-c971-4b7b-8b7d-586a2f9ef4f1","type":"Title"},"title_location":"left","tool_events":{"id":"14007017-9b97-4508-bb87-f842c6f037d9","type":"ToolEvents"},"toolbar":{"id":"791da07c-7f3a-4c04-837d-c8715fe13b6f","type":"Toolbar"},"x_range":{"id":"d077eec0-8b12-41d6-a57a-b65fe9faa986","type":"DataRange1d"},"y_range":{"id":"43a94608-e069-44f2-8c41-c5841dbfb4d5","type":"DataRange1d"}},"id":"462f7c9b-87aa-4eb4-b813-68690bfc0e33","subtype":"Figure","type":"Plot"}],"root_ids":["462f7c9b-87aa-4eb4-b813-68690bfc0e33"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"656028ba-c35f-4b7b-b70e-50f8a28e2559","elementid":"4cb2b663-0615-4a9e-8fd9-92f6a68aa833","modelid":"462f7c9b-87aa-4eb4-b813-68690bfc0e33"}];
              
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