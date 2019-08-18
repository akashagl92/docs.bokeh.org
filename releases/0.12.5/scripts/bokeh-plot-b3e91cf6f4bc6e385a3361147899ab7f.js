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
      };var element = document.getElementById("3459754f-bd66-4ad5-a359-b26fdd63848f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3459754f-bd66-4ad5-a359-b26fdd63848f' but no matching script tag was found. ")
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
                var docs_json = {"9437e1b4-5890-46cb-8c55-b0d8107b48b0":{"roots":{"references":[{"attributes":{},"id":"9f8b77b5-a150-484c-8e69-7e9117c43c79","type":"BasicTickFormatter"},{"attributes":{},"id":"b926c066-3cfa-406b-9436-d6aa2709dbac","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e08dd36-95be-4de8-9b2e-58f3ea9c48b8","type":"Circle"},{"attributes":{"callback":null,"plot":{"id":"0ed4f3f1-1c12-402f-8bbf-24035c58d918","subtype":"Figure","type":"Plot"},"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"2ebfd749-3c7f-42e5-8f1f-deb4392a2d46","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"0ed4f3f1-1c12-402f-8bbf-24035c58d918","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff4b1c81-f877-4310-ae2d-413efeeb6066","type":"BasicTicker"}},"id":"cfe8424b-4022-45a6-9605-9d3f39915192","type":"Grid"},{"attributes":{"formatter":{"id":"9f8b77b5-a150-484c-8e69-7e9117c43c79","type":"BasicTickFormatter"},"plot":{"id":"0ed4f3f1-1c12-402f-8bbf-24035c58d918","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff4b1c81-f877-4310-ae2d-413efeeb6066","type":"BasicTicker"}},"id":"bc0432e0-ca81-4620-8370-b166fe668ff5","type":"LinearAxis"},{"attributes":{},"id":"ff4b1c81-f877-4310-ae2d-413efeeb6066","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","desc"],"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"bad453b1-5c25-494f-b5cc-b1f0d83a51d4","type":"ColumnDataSource"},{"attributes":{},"id":"7b81c28b-4de5-4b18-afca-220bc060d24b","type":"ToolEvents"},{"attributes":{"plot":{"id":"0ed4f3f1-1c12-402f-8bbf-24035c58d918","subtype":"Figure","type":"Plot"},"ticker":{"id":"b926c066-3cfa-406b-9436-d6aa2709dbac","type":"BasicTicker"}},"id":"ffd4b729-8f69-42c5-938c-bd0e65b350e4","type":"Grid"},{"attributes":{"callback":null},"id":"eef8a4b2-6f95-44bb-8a55-fe30d95ab987","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2ebfd749-3c7f-42e5-8f1f-deb4392a2d46","type":"HoverTool"}]},"id":"f35709a9-9fee-43c8-bf3b-1b0b1d94cbb0","type":"Toolbar"},{"attributes":{},"id":"0c2299da-2081-4357-b4f5-9f88b56f8b22","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"de240fed-b1ce-4c5e-9c44-e93e2de64227","type":"Title"},{"attributes":{"below":[{"id":"486a6560-0ba9-480e-8978-b781c2b59381","type":"LinearAxis"}],"left":[{"id":"bc0432e0-ca81-4620-8370-b166fe668ff5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"486a6560-0ba9-480e-8978-b781c2b59381","type":"LinearAxis"},{"id":"ffd4b729-8f69-42c5-938c-bd0e65b350e4","type":"Grid"},{"id":"bc0432e0-ca81-4620-8370-b166fe668ff5","type":"LinearAxis"},{"id":"cfe8424b-4022-45a6-9605-9d3f39915192","type":"Grid"},{"id":"a1ae30cd-24c0-40dc-9956-8fd89d3c5cdf","type":"GlyphRenderer"}],"title":{"id":"de240fed-b1ce-4c5e-9c44-e93e2de64227","type":"Title"},"tool_events":{"id":"7b81c28b-4de5-4b18-afca-220bc060d24b","type":"ToolEvents"},"toolbar":{"id":"f35709a9-9fee-43c8-bf3b-1b0b1d94cbb0","type":"Toolbar"},"x_range":{"id":"aa330b2b-2201-4df4-8146-f1dfd2e5e12f","type":"DataRange1d"},"y_range":{"id":"eef8a4b2-6f95-44bb-8a55-fe30d95ab987","type":"DataRange1d"}},"id":"0ed4f3f1-1c12-402f-8bbf-24035c58d918","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"aa330b2b-2201-4df4-8146-f1dfd2e5e12f","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"668d0d96-6b72-4aeb-be47-191865866a18","type":"Circle"},{"attributes":{"data_source":{"id":"bad453b1-5c25-494f-b5cc-b1f0d83a51d4","type":"ColumnDataSource"},"glyph":{"id":"1e08dd36-95be-4de8-9b2e-58f3ea9c48b8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"668d0d96-6b72-4aeb-be47-191865866a18","type":"Circle"},"selection_glyph":null},"id":"a1ae30cd-24c0-40dc-9956-8fd89d3c5cdf","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0c2299da-2081-4357-b4f5-9f88b56f8b22","type":"BasicTickFormatter"},"plot":{"id":"0ed4f3f1-1c12-402f-8bbf-24035c58d918","subtype":"Figure","type":"Plot"},"ticker":{"id":"b926c066-3cfa-406b-9436-d6aa2709dbac","type":"BasicTicker"}},"id":"486a6560-0ba9-480e-8978-b781c2b59381","type":"LinearAxis"}],"root_ids":["0ed4f3f1-1c12-402f-8bbf-24035c58d918"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"9437e1b4-5890-46cb-8c55-b0d8107b48b0","elementid":"3459754f-bd66-4ad5-a359-b26fdd63848f","modelid":"0ed4f3f1-1c12-402f-8bbf-24035c58d918"}];
                
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
