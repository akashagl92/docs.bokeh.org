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
      };var element = document.getElementById("a6e6dc89-00a4-4f2f-978a-0a28a4e72ebd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a6e6dc89-00a4-4f2f-978a-0a28a4e72ebd' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"6bb8a738-443e-4225-81e6-f593b8bfde50":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f047382b-86cd-4287-8c82-b3ebc697663e","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABA","dtype":"float64","shape":[30]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBA","dtype":"float64","shape":[30]}}},"id":"2e56998a-6386-4acc-b8ba-2fb17d3b8f43","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"44d0c305-02ba-4e7e-8121-a008fb88f056","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"60865480-85b1-4635-812b-c96e3bb3052b","type":"Plot"},"ticker":{"id":"7da9a988-66c5-4063-a2b0-a7de0c35e7be","type":"BasicTicker"}},"id":"bbae8bf9-a0eb-454c-8254-c5e8f5bcbb6e","type":"Grid"},{"attributes":{"formatter":{"id":"c24b392a-7431-4533-b383-b613d5792ec9","type":"BasicTickFormatter"},"plot":{"id":"60865480-85b1-4635-812b-c96e3bb3052b","type":"Plot"},"ticker":{"id":"7da9a988-66c5-4063-a2b0-a7de0c35e7be","type":"BasicTicker"}},"id":"99ae7cb9-49d1-4e74-a8d9-6386284659c5","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2e56998a-6386-4acc-b8ba-2fb17d3b8f43","type":"ColumnDataSource"},"glyph":{"id":"f047382b-86cd-4287-8c82-b3ebc697663e","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"5ae6ef59-8ac2-4f16-8c65-8b51fad4e42a","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9ebe82e5-5a84-46db-b3ae-bc58ad8132a0","type":"BasicTickFormatter"},"plot":{"id":"60865480-85b1-4635-812b-c96e3bb3052b","type":"Plot"},"ticker":{"id":"bea7a7bd-6f00-4507-9147-4546f320ba53","type":"BasicTicker"}},"id":"80c5298c-fd38-4df3-8884-c8c4661b7abd","type":"LinearAxis"},{"attributes":{},"id":"7da9a988-66c5-4063-a2b0-a7de0c35e7be","type":"BasicTicker"},{"attributes":{},"id":"96595e3f-b83f-46d8-b4ea-bf3070f02581","type":"ToolEvents"},{"attributes":{"callback":null},"id":"cfe85341-9ab1-48ab-96c7-e89b3cc77189","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d7e4b333-7ae7-4363-8ccb-6da9a783bffb","type":"Toolbar"},{"attributes":{},"id":"bea7a7bd-6f00-4507-9147-4546f320ba53","type":"BasicTicker"},{"attributes":{"plot":{"id":"60865480-85b1-4635-812b-c96e3bb3052b","type":"Plot"},"ticker":{"id":"bea7a7bd-6f00-4507-9147-4546f320ba53","type":"BasicTicker"}},"id":"d008ce63-36a4-460e-8c89-52b8bea71675","type":"Grid"},{"attributes":{"below":[{"id":"80c5298c-fd38-4df3-8884-c8c4661b7abd","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"99ae7cb9-49d1-4e74-a8d9-6386284659c5","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"5ae6ef59-8ac2-4f16-8c65-8b51fad4e42a","type":"GlyphRenderer"},{"id":"80c5298c-fd38-4df3-8884-c8c4661b7abd","type":"LinearAxis"},{"id":"99ae7cb9-49d1-4e74-a8d9-6386284659c5","type":"LinearAxis"},{"id":"d008ce63-36a4-460e-8c89-52b8bea71675","type":"Grid"},{"id":"bbae8bf9-a0eb-454c-8254-c5e8f5bcbb6e","type":"Grid"}],"title":null,"tool_events":{"id":"96595e3f-b83f-46d8-b4ea-bf3070f02581","type":"ToolEvents"},"toolbar":{"id":"d7e4b333-7ae7-4363-8ccb-6da9a783bffb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cfe85341-9ab1-48ab-96c7-e89b3cc77189","type":"DataRange1d"},"y_range":{"id":"44d0c305-02ba-4e7e-8121-a008fb88f056","type":"DataRange1d"}},"id":"60865480-85b1-4635-812b-c96e3bb3052b","type":"Plot"},{"attributes":{},"id":"9ebe82e5-5a84-46db-b3ae-bc58ad8132a0","type":"BasicTickFormatter"},{"attributes":{},"id":"c24b392a-7431-4533-b383-b613d5792ec9","type":"BasicTickFormatter"}],"root_ids":["60865480-85b1-4635-812b-c96e3bb3052b"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"6bb8a738-443e-4225-81e6-f593b8bfde50","elementid":"a6e6dc89-00a4-4f2f-978a-0a28a4e72ebd","modelid":"60865480-85b1-4635-812b-c96e3bb3052b"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
