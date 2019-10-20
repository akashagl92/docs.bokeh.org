(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("52cba745-cf6f-43ba-abac-5a9515117a68");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '52cba745-cf6f-43ba-abac-5a9515117a68' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"79341555-c259-4fd3-a105-84972b13f714":{"roots":{"references":[{"attributes":{},"id":"5bd70ecc-9b3f-49d8-bb3f-18d5c9e7ee29","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"777a41b1-451a-44f4-89e1-705759030fb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7161159-d4b1-42bc-8db7-b8622a4a5cb1","type":"BasicTicker"}},"id":"b1ade384-0a48-485a-971e-6b8a1349ad7a","type":"Grid"},{"attributes":{},"id":"d7161159-d4b1-42bc-8db7-b8622a4a5cb1","type":"BasicTicker"},{"attributes":{},"id":"497b51fa-af0f-492e-a6da-1c1524586082","type":"LinearScale"},{"attributes":{},"id":"be8f9519-be04-43ee-8190-c08f51702ce4","type":"ResetTool"},{"attributes":{"callback":null},"id":"f488d6d8-b1c4-4e28-8c6d-ebc2bbe8135a","type":"DataRange1d"},{"attributes":{},"id":"a48fc390-d497-4216-ac4e-6d22e9127d03","type":"PanTool"},{"attributes":{"below":[{"id":"e77dc25b-92f6-4210-84de-a54fa4b834a7","type":"LinearAxis"}],"left":[{"id":"eae80fa7-91fa-4aec-a76f-71fef5cd0e2a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e77dc25b-92f6-4210-84de-a54fa4b834a7","type":"LinearAxis"},{"id":"3b0db838-d5b9-416c-8a3b-33845e1a874e","type":"Grid"},{"id":"eae80fa7-91fa-4aec-a76f-71fef5cd0e2a","type":"LinearAxis"},{"id":"b1ade384-0a48-485a-971e-6b8a1349ad7a","type":"Grid"},{"id":"6d3e288b-b0b7-47aa-b453-afb82cbaf09c","type":"BoxAnnotation"},{"id":"b7db417f-b917-4aeb-8271-62f231bbaedb","type":"GlyphRenderer"}],"title":{"id":"433c3b82-8a79-4f72-9980-8b2db4d3b4f2","type":"Title"},"toolbar":{"id":"9363396c-1756-4176-8c93-decc48d5bae6","type":"Toolbar"},"x_range":{"id":"f488d6d8-b1c4-4e28-8c6d-ebc2bbe8135a","type":"DataRange1d"},"x_scale":{"id":"497b51fa-af0f-492e-a6da-1c1524586082","type":"LinearScale"},"y_range":{"id":"971bd98e-f590-4284-b5b3-4c94e34ddf48","type":"DataRange1d"},"y_scale":{"id":"6196fd8d-8cef-4ed7-811b-c86298da9c06","type":"LinearScale"}},"id":"777a41b1-451a-44f4-89e1-705759030fb0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"433c3b82-8a79-4f72-9980-8b2db4d3b4f2","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"4c578ddd-f19b-41ac-bc54-4db05fc23e9d","type":"ColumnDataSource"},{"attributes":{},"id":"fa9dcf23-ba9e-41a3-aafe-8027dadc6d54","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"6d3e288b-b0b7-47aa-b453-afb82cbaf09c","type":"BoxAnnotation"}},"id":"f98be68a-69e7-4396-9ea7-fdbdee9c8df2","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a48fc390-d497-4216-ac4e-6d22e9127d03","type":"PanTool"},{"id":"dbef9f29-65bb-4a74-80e4-124fe5f3d7c9","type":"WheelZoomTool"},{"id":"f98be68a-69e7-4396-9ea7-fdbdee9c8df2","type":"BoxZoomTool"},{"id":"5bd70ecc-9b3f-49d8-bb3f-18d5c9e7ee29","type":"SaveTool"},{"id":"be8f9519-be04-43ee-8190-c08f51702ce4","type":"ResetTool"},{"id":"dbaf2acf-6567-4fc5-88f4-80ca26be80df","type":"HelpTool"}]},"id":"9363396c-1756-4176-8c93-decc48d5bae6","type":"Toolbar"},{"attributes":{"formatter":{"id":"4d9874e1-266b-4c78-8473-cc03c4889612","type":"BasicTickFormatter"},"plot":{"id":"777a41b1-451a-44f4-89e1-705759030fb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7161159-d4b1-42bc-8db7-b8622a4a5cb1","type":"BasicTicker"}},"id":"eae80fa7-91fa-4aec-a76f-71fef5cd0e2a","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"86db3996-68ad-4e76-aeb8-5f7b68881ea9","type":"Circle"},{"attributes":{"plot":{"id":"777a41b1-451a-44f4-89e1-705759030fb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"bfca401f-634c-4514-bc81-7a8bf15681b0","type":"BasicTicker"}},"id":"3b0db838-d5b9-416c-8a3b-33845e1a874e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2bc3e1de-bcb5-4965-8cfc-258afe15c13c","type":"Circle"},{"attributes":{"callback":null},"id":"971bd98e-f590-4284-b5b3-4c94e34ddf48","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4c578ddd-f19b-41ac-bc54-4db05fc23e9d","type":"ColumnDataSource"},"glyph":{"id":"86db3996-68ad-4e76-aeb8-5f7b68881ea9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2bc3e1de-bcb5-4965-8cfc-258afe15c13c","type":"Circle"},"selection_glyph":null,"view":{"id":"e5f81402-45f8-42e4-9cac-06a4ef0ebc2c","type":"CDSView"}},"id":"b7db417f-b917-4aeb-8271-62f231bbaedb","type":"GlyphRenderer"},{"attributes":{},"id":"dbef9f29-65bb-4a74-80e4-124fe5f3d7c9","type":"WheelZoomTool"},{"attributes":{"ticks":[2,3.5,4]},"id":"99e3d712-defa-4f70-b2c2-bbab6c0568cb","type":"FixedTicker"},{"attributes":{"formatter":{"id":"fa9dcf23-ba9e-41a3-aafe-8027dadc6d54","type":"BasicTickFormatter"},"plot":{"id":"777a41b1-451a-44f4-89e1-705759030fb0","subtype":"Figure","type":"Plot"},"ticker":{"id":"99e3d712-defa-4f70-b2c2-bbab6c0568cb","type":"FixedTicker"}},"id":"e77dc25b-92f6-4210-84de-a54fa4b834a7","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6d3e288b-b0b7-47aa-b453-afb82cbaf09c","type":"BoxAnnotation"},{"attributes":{},"id":"4d9874e1-266b-4c78-8473-cc03c4889612","type":"BasicTickFormatter"},{"attributes":{},"id":"6196fd8d-8cef-4ed7-811b-c86298da9c06","type":"LinearScale"},{"attributes":{},"id":"dbaf2acf-6567-4fc5-88f4-80ca26be80df","type":"HelpTool"},{"attributes":{},"id":"bfca401f-634c-4514-bc81-7a8bf15681b0","type":"BasicTicker"},{"attributes":{"source":{"id":"4c578ddd-f19b-41ac-bc54-4db05fc23e9d","type":"ColumnDataSource"}},"id":"e5f81402-45f8-42e4-9cac-06a4ef0ebc2c","type":"CDSView"}],"root_ids":["777a41b1-451a-44f4-89e1-705759030fb0"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"79341555-c259-4fd3-a105-84972b13f714","elementid":"52cba745-cf6f-43ba-abac-5a9515117a68","modelid":"777a41b1-451a-44f4-89e1-705759030fb0"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
