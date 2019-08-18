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
      };var element = document.getElementById("77c3a785-055e-43c9-868e-2978d0326dda");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '77c3a785-055e-43c9-868e-2978d0326dda' but no matching script tag was found. ")
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
                var docs_json = {"283d8369-e6e1-4f54-a085-24c879753c00":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"eb95af2b-2905-4bcc-867a-ebd7c0f285fa","type":"Toolbar"},{"attributes":{},"id":"26272c8f-83ec-42a7-807f-2e4b7a96a89c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"26272c8f-83ec-42a7-807f-2e4b7a96a89c","type":"BasicTickFormatter"},"plot":{"id":"dffcb308-edf6-4009-b6a7-4da68cc7b364","type":"Plot"},"ticker":{"id":"a57b4cee-627e-414d-97bd-fddd6563fc30","type":"BasicTicker"}},"id":"0384b463-f3c6-4b12-aa3d-c1e405a00ed7","type":"LinearAxis"},{"attributes":{"below":[{"id":"0384b463-f3c6-4b12-aa3d-c1e405a00ed7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2f249fca-eece-4de0-b52e-b301db3aac72","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f6d3cd3b-3c79-421c-b313-333acd6f820d","type":"GlyphRenderer"},{"id":"0384b463-f3c6-4b12-aa3d-c1e405a00ed7","type":"LinearAxis"},{"id":"2f249fca-eece-4de0-b52e-b301db3aac72","type":"LinearAxis"},{"id":"9a8ef7fa-39e9-4e17-9f8d-bcf1dc1b0d10","type":"Grid"},{"id":"c8c9f1bf-7e62-448e-a821-f23b3d45c059","type":"Grid"}],"title":null,"tool_events":{"id":"a5e25a7c-fb1b-4c84-b80c-75e02d259924","type":"ToolEvents"},"toolbar":{"id":"eb95af2b-2905-4bcc-867a-ebd7c0f285fa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6069944c-ceb1-4bbf-b874-e6fe57a62e76","type":"DataRange1d"},"y_range":{"id":"31b533ac-3a05-4522-a3a9-713d0af3c775","type":"DataRange1d"}},"id":"dffcb308-edf6-4009-b6a7-4da68cc7b364","type":"Plot"},{"attributes":{"callback":null},"id":"31b533ac-3a05-4522-a3a9-713d0af3c775","type":"DataRange1d"},{"attributes":{"plot":{"id":"dffcb308-edf6-4009-b6a7-4da68cc7b364","type":"Plot"},"ticker":{"id":"a57b4cee-627e-414d-97bd-fddd6563fc30","type":"BasicTicker"}},"id":"9a8ef7fa-39e9-4e17-9f8d-bcf1dc1b0d10","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABA","dtype":"float64","shape":[30]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBA","dtype":"float64","shape":[30]}}},"id":"3da11a16-a6f9-4537-9c77-ec43359b40fe","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"dffcb308-edf6-4009-b6a7-4da68cc7b364","type":"Plot"},"ticker":{"id":"34be9894-0246-4b30-a5d7-cc0f97e3de04","type":"BasicTicker"}},"id":"c8c9f1bf-7e62-448e-a821-f23b3d45c059","type":"Grid"},{"attributes":{},"id":"a5e25a7c-fb1b-4c84-b80c-75e02d259924","type":"ToolEvents"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"910bd084-46a3-4be3-a015-a3da1559c8aa","type":"Line"},{"attributes":{"data_source":{"id":"3da11a16-a6f9-4537-9c77-ec43359b40fe","type":"ColumnDataSource"},"glyph":{"id":"910bd084-46a3-4be3-a015-a3da1559c8aa","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f6d3cd3b-3c79-421c-b313-333acd6f820d","type":"GlyphRenderer"},{"attributes":{},"id":"65feb40e-8932-46b0-bd66-0f9a2b1a43e9","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6069944c-ceb1-4bbf-b874-e6fe57a62e76","type":"DataRange1d"},{"attributes":{"formatter":{"id":"65feb40e-8932-46b0-bd66-0f9a2b1a43e9","type":"BasicTickFormatter"},"plot":{"id":"dffcb308-edf6-4009-b6a7-4da68cc7b364","type":"Plot"},"ticker":{"id":"34be9894-0246-4b30-a5d7-cc0f97e3de04","type":"BasicTicker"}},"id":"2f249fca-eece-4de0-b52e-b301db3aac72","type":"LinearAxis"},{"attributes":{},"id":"a57b4cee-627e-414d-97bd-fddd6563fc30","type":"BasicTicker"},{"attributes":{},"id":"34be9894-0246-4b30-a5d7-cc0f97e3de04","type":"BasicTicker"}],"root_ids":["dffcb308-edf6-4009-b6a7-4da68cc7b364"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"283d8369-e6e1-4f54-a085-24c879753c00","elementid":"77c3a785-055e-43c9-868e-2978d0326dda","modelid":"dffcb308-edf6-4009-b6a7-4da68cc7b364"}];
                
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
