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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("5ace5f4d-5029-435c-bb86-0cba95fda064");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5ace5f4d-5029-435c-bb86-0cba95fda064' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"769aced1-1112-4689-87ef-db92f2976ad8":{"roots":{"references":[{"attributes":{"formatter":{"id":"371f2507-e93e-40a9-adf7-fa840bd3a807","type":"BasicTickFormatter"},"plot":{"id":"e8a057a1-1cf7-441f-b392-c1dee1023b2f","type":"Plot"},"ticker":{"id":"9064665b-6e74-4978-b373-4444a467d5fd","type":"BasicTicker"}},"id":"e15c1fb9-6729-4cd0-84f4-1a4773b55cdb","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d95cb490-4ab1-4c24-ba2b-354ef940b30a","type":"Toolbar"},{"attributes":{},"id":"72da9153-e06b-424b-bcf5-ce24cae761ca","type":"BasicTicker"},{"attributes":{"plot":{"id":"e8a057a1-1cf7-441f-b392-c1dee1023b2f","type":"Plot"},"ticker":{"id":"9064665b-6e74-4978-b373-4444a467d5fd","type":"BasicTicker"}},"id":"7c3dfe86-092e-46cb-b57c-3a0f0647bd9c","type":"Grid"},{"attributes":{"callback":null,"column_names":["url","h1","w1","x2","x1","y2","y1"],"data":{"h1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"url":["http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png","http://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"x1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"x2":{"__ndarray__":"AAAAAAAAScAAAAAAAAAAAAAAAAAAAElAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y2":{"__ndarray__":"AAAAAAAAAAAAAAAAAABJQAAAAAAAAFlAAAAAAADAYkAAAAAAAABpQA==","dtype":"float64","shape":[5]}}},"id":"26444a86-bb2f-4126-b7c0-b859fe101849","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"e8a057a1-1cf7-441f-b392-c1dee1023b2f","type":"Plot"},"ticker":{"id":"72da9153-e06b-424b-bcf5-ce24cae761ca","type":"BasicTicker"}},"id":"9c5f311f-5c70-4242-b266-d69bf3683f4f","type":"Grid"},{"attributes":{},"id":"2a0b1ebb-c420-468f-a22c-86ef334ad5c2","type":"LinearScale"},{"attributes":{},"id":"371f2507-e93e-40a9-adf7-fa840bd3a807","type":"BasicTickFormatter"},{"attributes":{},"id":"e34a7962-9d16-4ccc-9873-5832a610ebcd","type":"ToolEvents"},{"attributes":{},"id":"281d145f-c12a-43a2-ab8a-735cd9df72df","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"e6c9e0b2-d458-44e9-9187-606f63b0a809","type":"Range1d"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"0d0bfb55-8700-439b-ae15-cb6d11c68825","type":"ImageURL"},{"attributes":{},"id":"9064665b-6e74-4978-b373-4444a467d5fd","type":"BasicTicker"},{"attributes":{"data_source":{"id":"26444a86-bb2f-4126-b7c0-b859fe101849","type":"ColumnDataSource"},"glyph":{"id":"05c51aa2-dc58-408e-badb-8d5abafc2f96","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null},"id":"19b0bf93-9554-46d9-a6f9-b949eeedbc1d","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"e15c1fb9-6729-4cd0-84f4-1a4773b55cdb","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"fda628f9-8b60-4d62-b4a4-d2c6c8905cf1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"5ab960cd-c4b7-4c87-a52f-51c4f43a5ca2","type":"GlyphRenderer"},{"id":"19b0bf93-9554-46d9-a6f9-b949eeedbc1d","type":"GlyphRenderer"},{"id":"27db1ff3-b7ce-4284-8907-9e6863e59770","type":"GlyphRenderer"},{"id":"e15c1fb9-6729-4cd0-84f4-1a4773b55cdb","type":"LinearAxis"},{"id":"fda628f9-8b60-4d62-b4a4-d2c6c8905cf1","type":"LinearAxis"},{"id":"7c3dfe86-092e-46cb-b57c-3a0f0647bd9c","type":"Grid"},{"id":"9c5f311f-5c70-4242-b266-d69bf3683f4f","type":"Grid"}],"title":null,"tool_events":{"id":"e34a7962-9d16-4ccc-9873-5832a610ebcd","type":"ToolEvents"},"toolbar":{"id":"d95cb490-4ab1-4c24-ba2b-354ef940b30a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e6c9e0b2-d458-44e9-9187-606f63b0a809","type":"Range1d"},"x_scale":{"id":"d97631f7-2215-4d30-94f2-f2b3e70ee4a6","type":"LinearScale"},"y_range":{"id":"442bb9f9-ccad-4cd9-8918-22a567a05631","type":"Range1d"},"y_scale":{"id":"2a0b1ebb-c420-468f-a22c-86ef334ad5c2","type":"LinearScale"}},"id":"e8a057a1-1cf7-441f-b392-c1dee1023b2f","type":"Plot"},{"attributes":{"data_source":{"id":"26444a86-bb2f-4126-b7c0-b859fe101849","type":"ColumnDataSource"},"glyph":{"id":"0d0bfb55-8700-439b-ae15-cb6d11c68825","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null},"id":"5ab960cd-c4b7-4c87-a52f-51c4f43a5ca2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26444a86-bb2f-4126-b7c0-b859fe101849","type":"ColumnDataSource"},"glyph":{"id":"1b5ff18f-aa06-4a5a-ab99-be76c54465e5","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null},"id":"27db1ff3-b7ce-4284-8907-9e6863e59770","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"281d145f-c12a-43a2-ab8a-735cd9df72df","type":"BasicTickFormatter"},"plot":{"id":"e8a057a1-1cf7-441f-b392-c1dee1023b2f","type":"Plot"},"ticker":{"id":"72da9153-e06b-424b-bcf5-ce24cae761ca","type":"BasicTicker"}},"id":"fda628f9-8b60-4d62-b4a4-d2c6c8905cf1","type":"LinearAxis"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"442bb9f9-ccad-4cd9-8918-22a567a05631","type":"Range1d"},{"attributes":{},"id":"d97631f7-2215-4d30-94f2-f2b3e70ee4a6","type":"LinearScale"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"05c51aa2-dc58-408e-badb-8d5abafc2f96","type":"ImageURL"},{"attributes":{"anchor":"bottom_right","url":{"value":"http://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"1b5ff18f-aa06-4a5a-ab99-be76c54465e5","type":"ImageURL"}],"root_ids":["e8a057a1-1cf7-441f-b392-c1dee1023b2f"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"769aced1-1112-4689-87ef-db92f2976ad8","elementid":"5ace5f4d-5029-435c-bb86-0cba95fda064","modelid":"e8a057a1-1cf7-441f-b392-c1dee1023b2f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
