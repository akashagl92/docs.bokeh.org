(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("6170df93-319f-4124-b308-d23765d5e9c9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6170df93-319f-4124-b308-d23765d5e9c9' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"dedf5708-45de-47fa-8f61-387b098de599":{"roots":{"references":[{"attributes":{},"id":"18759","type":"BasicTicker"},{"attributes":{},"id":"18801","type":"Selection"},{"attributes":{},"id":"18754","type":"LinearScale"},{"attributes":{},"id":"18771","type":"SaveTool"},{"attributes":{},"id":"18772","type":"ResetTool"},{"attributes":{"formatter":{"id":"18798","type":"BasicTickFormatter"},"ticker":{"id":"18764","type":"BasicTicker"}},"id":"18763","type":"LinearAxis"},{"attributes":{"end":{"id":"18792","type":"VeeHead"},"line_color":{"value":"red"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"18793","type":"Arrow"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18803","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4}},"id":"18786","type":"OpenHead"},{"attributes":{"end":{"id":"18786","type":"OpenHead"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"18787","type":"Arrow"},{"attributes":{"source":{"id":"18781","type":"ColumnDataSource"}},"id":"18785","type":"CDSView"},{"attributes":{"callback":null,"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]},"selected":{"id":"18801","type":"Selection"},"selection_policy":{"id":"18802","type":"UnionRenderers"}},"id":"18781","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"18782","type":"Circle"},{"attributes":{},"id":"18764","type":"BasicTicker"},{"attributes":{"overlay":{"id":"18803","type":"BoxAnnotation"}},"id":"18770","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"18758","type":"LinearAxis"}],"center":[{"id":"18762","type":"Grid"},{"id":"18767","type":"Grid"},{"id":"18787","type":"Arrow"},{"id":"18790","type":"Arrow"},{"id":"18793","type":"Arrow"}],"left":[{"id":"18763","type":"LinearAxis"}],"renderers":[{"id":"18784","type":"GlyphRenderer"}],"title":{"id":"18796","type":"Title"},"toolbar":{"id":"18774","type":"Toolbar"},"x_range":{"id":"18750","type":"DataRange1d"},"x_scale":{"id":"18754","type":"LinearScale"},"y_range":{"id":"18752","type":"DataRange1d"},"y_scale":{"id":"18756","type":"LinearScale"}},"id":"18749","subtype":"Figure","type":"Plot"},{"attributes":{"size":35},"id":"18792","type":"VeeHead"},{"attributes":{},"id":"18756","type":"LinearScale"},{"attributes":{"data_source":{"id":"18781","type":"ColumnDataSource"},"glyph":{"id":"18782","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18783","type":"Circle"},"selection_glyph":null,"view":{"id":"18785","type":"CDSView"}},"id":"18784","type":"GlyphRenderer"},{"attributes":{},"id":"18802","type":"UnionRenderers"},{"attributes":{},"id":"18769","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18768","type":"PanTool"},{"id":"18769","type":"WheelZoomTool"},{"id":"18770","type":"BoxZoomTool"},{"id":"18771","type":"SaveTool"},{"id":"18772","type":"ResetTool"},{"id":"18773","type":"HelpTool"}]},"id":"18774","type":"Toolbar"},{"attributes":{},"id":"18773","type":"HelpTool"},{"attributes":{"formatter":{"id":"18800","type":"BasicTickFormatter"},"ticker":{"id":"18759","type":"BasicTicker"}},"id":"18758","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"orange"}},"id":"18789","type":"NormalHead"},{"attributes":{},"id":"18800","type":"BasicTickFormatter"},{"attributes":{"end":{"id":"18789","type":"NormalHead"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"18790","type":"Arrow"},{"attributes":{"dimension":1,"ticker":{"id":"18764","type":"BasicTicker"}},"id":"18767","type":"Grid"},{"attributes":{"callback":null},"id":"18750","type":"DataRange1d"},{"attributes":{},"id":"18798","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"18759","type":"BasicTicker"}},"id":"18762","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"18783","type":"Circle"},{"attributes":{},"id":"18768","type":"PanTool"},{"attributes":{"text":""},"id":"18796","type":"Title"},{"attributes":{"callback":null},"id":"18752","type":"DataRange1d"}],"root_ids":["18749"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"dedf5708-45de-47fa-8f61-387b098de599","roots":{"18749":"6170df93-319f-4124-b308-d23765d5e9c9"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();