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
      };var element = document.getElementById("cd318a70-9233-43fb-80b8-420d9a47712f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd318a70-9233-43fb-80b8-420d9a47712f' but no matching script tag was found. ")
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
                var docs_json = {"a8e55955-84aa-49a1-80d1-c5685b9247bf":{"roots":{"references":[{"attributes":{"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"}},"id":"6beaed8d-4340-4fbe-991e-4cf12ebfd672","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"}},"id":"bc1c7755-d7d7-4d85-8058-8e126e908eab","type":"SaveTool"},{"attributes":{"overlay":{"id":"12d6b3a4-dd54-4b23-ae0e-b77d11c8e76c","type":"BoxAnnotation"},"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"}},"id":"508e8ba5-8b1e-4cc1-8230-8c437b05162c","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4e2d395-ee05-41a7-a94c-d6cd5cd6da28","type":"BasicTicker"}},"id":"b4d19cb2-d3f5-44f6-8c3a-ce917cd1da6a","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12d6b3a4-dd54-4b23-ae0e-b77d11c8e76c","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"5cbd1239-4273-4235-a031-7e8128fe4ab9","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1c2b7fa-5f25-4147-ab9c-57f7b8146353","type":"BasicTicker"}},"id":"cb028a66-ada3-406e-b7cc-893217cff5f3","type":"LinearAxis"},{"attributes":{"formatter":{"id":"33b5aa5f-0300-443a-a113-7d49c74630c7","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"},"ticker":{"id":"f4e2d395-ee05-41a7-a94c-d6cd5cd6da28","type":"BasicTicker"}},"id":"ffe171d4-d58e-4684-9c99-580812d2d76e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"30c91e89-bac8-4e95-825c-67f9d8eb79f4","type":"Circle"},{"attributes":{},"id":"33b5aa5f-0300-443a-a113-7d49c74630c7","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"71ba2732-065e-4751-aad7-2a003771b27a","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4aa00e35-f550-404d-a865-c00415027276","type":"ColumnDataSource"},"glyph":{"id":"30c91e89-bac8-4e95-825c-67f9d8eb79f4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d34d78de-7f81-46fb-8021-9b49dac767e2","type":"Circle"},"selection_glyph":null},"id":"0788ce2f-eb8a-4a3b-988b-a1f8d10c61d4","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"ffe171d4-d58e-4684-9c99-580812d2d76e","type":"LinearAxis"}],"left":[{"id":"cb028a66-ada3-406e-b7cc-893217cff5f3","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ffe171d4-d58e-4684-9c99-580812d2d76e","type":"LinearAxis"},{"id":"b4d19cb2-d3f5-44f6-8c3a-ce917cd1da6a","type":"Grid"},{"id":"cb028a66-ada3-406e-b7cc-893217cff5f3","type":"LinearAxis"},{"id":"368f1314-1b3c-4db2-837f-aeb0bb115ced","type":"Grid"},{"id":"12d6b3a4-dd54-4b23-ae0e-b77d11c8e76c","type":"BoxAnnotation"},{"id":"0788ce2f-eb8a-4a3b-988b-a1f8d10c61d4","type":"GlyphRenderer"}],"title":{"id":"105169b3-1f90-475e-b0aa-13d65244d115","type":"Title"},"tool_events":{"id":"ef624692-53e3-4c52-a7e1-413b72838633","type":"ToolEvents"},"toolbar":{"id":"ed2df2e4-98f9-490f-8895-6db5262169e4","type":"Toolbar"},"x_range":{"id":"49618be7-7fec-40cc-914d-beaa0cd50f0d","type":"DataRange1d"},"y_range":{"id":"71ba2732-065e-4751-aad7-2a003771b27a","type":"DataRange1d"}},"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"4aa00e35-f550-404d-a865-c00415027276","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"105169b3-1f90-475e-b0aa-13d65244d115","type":"Title"},{"attributes":{},"id":"5cbd1239-4273-4235-a031-7e8128fe4ab9","type":"BasicTickFormatter"},{"attributes":{},"id":"f4e2d395-ee05-41a7-a94c-d6cd5cd6da28","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d34d78de-7f81-46fb-8021-9b49dac767e2","type":"Circle"},{"attributes":{"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"}},"id":"8fd6e1b9-773f-46e9-b861-3326c23666c1","type":"ResetTool"},{"attributes":{"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"}},"id":"86f0512b-a046-444b-9fd7-1a1b30a84aa2","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1c2b7fa-5f25-4147-ab9c-57f7b8146353","type":"BasicTicker"}},"id":"368f1314-1b3c-4db2-837f-aeb0bb115ced","type":"Grid"},{"attributes":{"callback":null},"id":"49618be7-7fec-40cc-914d-beaa0cd50f0d","type":"DataRange1d"},{"attributes":{},"id":"ef624692-53e3-4c52-a7e1-413b72838633","type":"ToolEvents"},{"attributes":{"plot":{"id":"18592f7d-f543-421f-a566-1ec41cdeaa81","subtype":"Figure","type":"Plot"}},"id":"6faddc88-e60d-40f6-890c-cb2ad72b58fd","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6faddc88-e60d-40f6-890c-cb2ad72b58fd","type":"PanTool"},{"id":"6beaed8d-4340-4fbe-991e-4cf12ebfd672","type":"WheelZoomTool"},{"id":"508e8ba5-8b1e-4cc1-8230-8c437b05162c","type":"BoxZoomTool"},{"id":"bc1c7755-d7d7-4d85-8058-8e126e908eab","type":"SaveTool"},{"id":"8fd6e1b9-773f-46e9-b861-3326c23666c1","type":"ResetTool"},{"id":"86f0512b-a046-444b-9fd7-1a1b30a84aa2","type":"HelpTool"}]},"id":"ed2df2e4-98f9-490f-8895-6db5262169e4","type":"Toolbar"},{"attributes":{},"id":"b1c2b7fa-5f25-4147-ab9c-57f7b8146353","type":"BasicTicker"}],"root_ids":["18592f7d-f543-421f-a566-1ec41cdeaa81"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a8e55955-84aa-49a1-80d1-c5685b9247bf","elementid":"cd318a70-9233-43fb-80b8-420d9a47712f","modelid":"18592f7d-f543-421f-a566-1ec41cdeaa81"}];
                
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
