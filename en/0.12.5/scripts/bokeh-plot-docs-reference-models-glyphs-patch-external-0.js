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
      };var element = document.getElementById("42615b91-dd70-4709-a5d1-a00e70767374");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '42615b91-dd70-4709-a5d1-a00e70767374' but no matching script tag was found. ")
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
                var docs_json = {"fd1a59cc-2cac-4f26-9361-0ead67d1d3b1":{"roots":{"references":[{"attributes":{"formatter":{"id":"22577f7d-61f2-4f39-b542-4f53ad35cdc0","type":"BasicTickFormatter"},"plot":{"id":"9151fcde-a31c-4da8-a703-cc3021e7d460","type":"Plot"},"ticker":{"id":"f2eb90ff-cfb1-4902-bfe3-3e34825e48cf","type":"BasicTicker"}},"id":"8c88f57f-e115-4ee6-8ad9-9c33ae3a1561","type":"LinearAxis"},{"attributes":{},"id":"22577f7d-61f2-4f39-b542-4f53ad35cdc0","type":"BasicTickFormatter"},{"attributes":{},"id":"39c7b7af-04b5-4236-971f-d611ed98764e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9151fcde-a31c-4da8-a703-cc3021e7d460","type":"Plot"},"ticker":{"id":"f2eb90ff-cfb1-4902-bfe3-3e34825e48cf","type":"BasicTicker"}},"id":"5accc573-9a83-429f-920f-f54b886925c2","type":"Grid"},{"attributes":{},"id":"3151c59b-d88a-4dbc-817b-234572f7a843","type":"BasicTicker"},{"attributes":{},"id":"1c92074a-0f16-46ca-8142-5ec00d3efd62","type":"ToolEvents"},{"attributes":{"formatter":{"id":"39c7b7af-04b5-4236-971f-d611ed98764e","type":"BasicTickFormatter"},"plot":{"id":"9151fcde-a31c-4da8-a703-cc3021e7d460","type":"Plot"},"ticker":{"id":"3151c59b-d88a-4dbc-817b-234572f7a843","type":"BasicTicker"}},"id":"41ccf453-f54a-417e-946d-30b90b191bbc","type":"LinearAxis"},{"attributes":{"below":[{"id":"8c88f57f-e115-4ee6-8ad9-9c33ae3a1561","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"41ccf453-f54a-417e-946d-30b90b191bbc","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"bd6cc05a-bfba-4905-9c52-723af6a07d63","type":"GlyphRenderer"},{"id":"8c88f57f-e115-4ee6-8ad9-9c33ae3a1561","type":"LinearAxis"},{"id":"41ccf453-f54a-417e-946d-30b90b191bbc","type":"LinearAxis"},{"id":"5accc573-9a83-429f-920f-f54b886925c2","type":"Grid"},{"id":"072a58ba-646b-4fcc-9baa-a7803444500b","type":"Grid"}],"title":null,"tool_events":{"id":"1c92074a-0f16-46ca-8142-5ec00d3efd62","type":"ToolEvents"},"toolbar":{"id":"f6620912-aacb-4930-b509-07a3655b7fda","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7a227b18-f036-4014-8c61-be58bb9f5233","type":"DataRange1d"},"y_range":{"id":"ee44e00a-7759-4b78-80a1-4433db4eb51c","type":"DataRange1d"}},"id":"9151fcde-a31c-4da8-a703-cc3021e7d460","type":"Plot"},{"attributes":{},"id":"f2eb90ff-cfb1-4902-bfe3-3e34825e48cf","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABAAAAAAAAAAECMsNzTCMv9PxphuacRlvs/qBGWexph+T80wnJPIyz3P8JyTyMs9/Q/UCMs9zTC8j/c0wjLPY3wP9QIyz2NsOw/8GmE5Z5G6D8Iyz2NsNzjP0hY7mmE5d4/eBphuacR1j9guacRlnvKP6B7GmG5p7E/oHsaYbmnsb9guacRlnvKv3waYbmnEda/SFjuaYTl3r8Iyz2NsNzjv+5phOWeRui/1AjLPY2w7L/d0wjLPY3wv1AjLPc0wvK/wnJPIyz39L81wnJPIyz3v6gRlnsaYfm/GmG5pxGW+7+NsNzTCMv9vwAAAAAAAADA","dtype":"float64","shape":[60]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBAZmZmZmZmIECkMMUdEx4eQMqiBv9PlhtAQCORcIM1GUACsmRyrfsWQBVPgQTO6BRAdvrmJuX8EkAktJXZ8jcRQEX4GjnuMw9A3qSc3+NFDEASbrCmxqUJQOVTVo6WUwdAVFaOllNPBUBhdVi//ZgDQAuxtAiVMAJAUQmjchkWAUA1fiP9ikkAQGsfbFDTlf8/pnu152o0/z8cESPA3G7/P+Zv2myUIgBA23M1mqfbAEBulCLop+IBQJ3RoVaVNwNAaCuz5W/aBEDSoVaVN8sGQNk0jGXsCQlAe+RTVo6WC0C8sK1nHXEOQM3MzMzMzBBA","dtype":"float64","shape":[60]}}},"id":"a59501e0-d09f-4784-8149-5daf586a489e","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f6620912-aacb-4930-b509-07a3655b7fda","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"9151fcde-a31c-4da8-a703-cc3021e7d460","type":"Plot"},"ticker":{"id":"3151c59b-d88a-4dbc-817b-234572f7a843","type":"BasicTicker"}},"id":"072a58ba-646b-4fcc-9baa-a7803444500b","type":"Grid"},{"attributes":{"data_source":{"id":"a59501e0-d09f-4784-8149-5daf586a489e","type":"ColumnDataSource"},"glyph":{"id":"499be5b8-0925-4279-a7c3-b4bb73c3465f","type":"Patch"},"hover_glyph":null,"muted_glyph":null},"id":"bd6cc05a-bfba-4905-9c52-723af6a07d63","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"ee44e00a-7759-4b78-80a1-4433db4eb51c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"499be5b8-0925-4279-a7c3-b4bb73c3465f","type":"Patch"},{"attributes":{"callback":null},"id":"7a227b18-f036-4014-8c61-be58bb9f5233","type":"DataRange1d"}],"root_ids":["9151fcde-a31c-4da8-a703-cc3021e7d460"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"fd1a59cc-2cac-4f26-9361-0ead67d1d3b1","elementid":"42615b91-dd70-4709-a5d1-a00e70767374","modelid":"9151fcde-a31c-4da8-a703-cc3021e7d460"}];
                
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
