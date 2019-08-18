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
      };var element = document.getElementById("7cdaf744-c5ec-4ec6-96f1-7f4871fe2277");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7cdaf744-c5ec-4ec6-96f1-7f4871fe2277' but no matching script tag was found. ")
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
                var docs_json = {"9d875f28-2d8a-4b67-bbe6-8e67d457ff08":{"roots":{"references":[{"attributes":{"formatter":{"id":"048d981a-13f4-4c8d-ac92-fae891c61f69","type":"BasicTickFormatter"},"plot":{"id":"5f1704cf-9fc6-4e22-a98a-83fa1d668a3d","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a52aad7-be0c-429d-ae7a-4d7956404596","type":"BasicTicker"}},"id":"b68bac33-00e2-402b-b2e2-66879737c8d5","type":"LinearAxis"},{"attributes":{},"id":"2863df97-aed6-4d88-af34-766940d3ece2","type":"ToolEvents"},{"attributes":{"below":[{"id":"d4826f79-93fe-4583-a6a8-76ba8c2c3524","type":"LinearAxis"}],"left":[{"id":"b68bac33-00e2-402b-b2e2-66879737c8d5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d4826f79-93fe-4583-a6a8-76ba8c2c3524","type":"LinearAxis"},{"id":"5d63d7b7-9427-4782-b2bb-c9b2f8aa74b0","type":"Grid"},{"id":"b68bac33-00e2-402b-b2e2-66879737c8d5","type":"LinearAxis"},{"id":"5b20584c-7f37-474f-8fe9-d7390c2c1bae","type":"Grid"},{"id":"51d6f660-2cc2-4e71-8997-3bd74de5aae0","type":"GlyphRenderer"}],"title":{"id":"973b37d6-3aa8-4b79-ad44-1203af4a64d0","type":"Title"},"tool_events":{"id":"2863df97-aed6-4d88-af34-766940d3ece2","type":"ToolEvents"},"toolbar":{"id":"fa379f45-6283-4ab0-a1f1-35d66c37707e","type":"Toolbar"},"x_range":{"id":"9e8ddf09-a1b8-48ec-ac74-1a3e1082bf4c","type":"DataRange1d"},"x_scale":{"id":"2c1df778-016c-444d-bc1a-7c39ec9e7a7e","type":"LinearScale"},"y_range":{"id":"e05d876a-7c69-4fed-9b22-cb659263c04c","type":"DataRange1d"},"y_scale":{"id":"699d9ea3-6d1a-4b6c-a870-f70098f3a679","type":"LinearScale"}},"id":"5f1704cf-9fc6-4e22-a98a-83fa1d668a3d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2a52aad7-be0c-429d-ae7a-4d7956404596","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["desc","y","x"],"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a714e486-9e1e-4e2d-b3ee-675531b63841","type":"ColumnDataSource"},{"attributes":{},"id":"699d9ea3-6d1a-4b6c-a870-f70098f3a679","type":"LinearScale"},{"attributes":{},"id":"2c1df778-016c-444d-bc1a-7c39ec9e7a7e","type":"LinearScale"},{"attributes":{"data_source":{"id":"a714e486-9e1e-4e2d-b3ee-675531b63841","type":"ColumnDataSource"},"glyph":{"id":"cda3f184-4cf0-47f4-bd17-7051bcadec3c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7b8efe57-e4fa-4dd3-8e07-bd7894c7e25a","type":"Circle"},"selection_glyph":null},"id":"51d6f660-2cc2-4e71-8997-3bd74de5aae0","type":"GlyphRenderer"},{"attributes":{"callback":null,"plot":{"id":"5f1704cf-9fc6-4e22-a98a-83fa1d668a3d","subtype":"Figure","type":"Plot"},"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"839ad1d8-85ac-4f9f-bc14-b4a9f1854c55","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"839ad1d8-85ac-4f9f-bc14-b4a9f1854c55","type":"HoverTool"}]},"id":"fa379f45-6283-4ab0-a1f1-35d66c37707e","type":"Toolbar"},{"attributes":{"callback":null},"id":"9e8ddf09-a1b8-48ec-ac74-1a3e1082bf4c","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"973b37d6-3aa8-4b79-ad44-1203af4a64d0","type":"Title"},{"attributes":{"plot":{"id":"5f1704cf-9fc6-4e22-a98a-83fa1d668a3d","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdcee2c8-456f-44d6-9405-66a4a73a0101","type":"BasicTicker"}},"id":"5d63d7b7-9427-4782-b2bb-c9b2f8aa74b0","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"cda3f184-4cf0-47f4-bd17-7051bcadec3c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b8efe57-e4fa-4dd3-8e07-bd7894c7e25a","type":"Circle"},{"attributes":{"formatter":{"id":"af07586f-6d98-4fef-baba-c7931195662d","type":"BasicTickFormatter"},"plot":{"id":"5f1704cf-9fc6-4e22-a98a-83fa1d668a3d","subtype":"Figure","type":"Plot"},"ticker":{"id":"fdcee2c8-456f-44d6-9405-66a4a73a0101","type":"BasicTicker"}},"id":"d4826f79-93fe-4583-a6a8-76ba8c2c3524","type":"LinearAxis"},{"attributes":{},"id":"048d981a-13f4-4c8d-ac92-fae891c61f69","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"5f1704cf-9fc6-4e22-a98a-83fa1d668a3d","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a52aad7-be0c-429d-ae7a-4d7956404596","type":"BasicTicker"}},"id":"5b20584c-7f37-474f-8fe9-d7390c2c1bae","type":"Grid"},{"attributes":{"callback":null},"id":"e05d876a-7c69-4fed-9b22-cb659263c04c","type":"DataRange1d"},{"attributes":{},"id":"af07586f-6d98-4fef-baba-c7931195662d","type":"BasicTickFormatter"},{"attributes":{},"id":"fdcee2c8-456f-44d6-9405-66a4a73a0101","type":"BasicTicker"}],"root_ids":["5f1704cf-9fc6-4e22-a98a-83fa1d668a3d"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"9d875f28-2d8a-4b67-bbe6-8e67d457ff08","elementid":"7cdaf744-c5ec-4ec6-96f1-7f4871fe2277","modelid":"5f1704cf-9fc6-4e22-a98a-83fa1d668a3d"}];
                
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
