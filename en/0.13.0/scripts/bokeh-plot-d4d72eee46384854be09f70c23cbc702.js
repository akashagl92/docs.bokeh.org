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
      };var element = document.getElementById("a3803256-07ec-4d56-9903-6c757bc79044");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a3803256-07ec-4d56-9903-6c757bc79044' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"c53807f5-94e2-4113-82fd-1acdc9e8e2dd":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3e36466-1767-421a-9390-8531a68ec344","type":"PanTool"},{"id":"598a9033-f7eb-427d-92e0-a6a0a75d5807","type":"WheelZoomTool"},{"id":"2437e60f-0681-47ab-b896-e71f8780073c","type":"BoxZoomTool"},{"id":"3175fd59-7622-4d3b-a4d8-f9759cf60945","type":"SaveTool"},{"id":"5c3973c6-a1ce-4f6f-bade-b73336852820","type":"ResetTool"},{"id":"6c576a74-fa35-43eb-8a73-06f58b498d4c","type":"HelpTool"}]},"id":"62a2bb53-b1d5-455d-b425-f8b92c096706","type":"Toolbar"},{"attributes":{"plot":{"id":"6099774f-cf27-48df-b9ea-dc2185945dfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a8d82c1-725f-46d3-a374-d32211590376","type":"BasicTicker"}},"id":"31cb61fe-2559-4ecc-b556-bbb9cb48c46b","type":"Grid"},{"attributes":{"formatter":{"id":"3c50263d-0ee2-45d4-a4d0-8ae7689bf47a","type":"BasicTickFormatter"},"plot":{"id":"6099774f-cf27-48df-b9ea-dc2185945dfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3c7b477-ec93-4fa3-84cf-645b7f256c83","type":"BasicTicker"}},"id":"919f205c-880d-4d6a-b33c-19ee391a9d65","type":"LinearAxis"},{"attributes":{},"id":"3c50263d-0ee2-45d4-a4d0-8ae7689bf47a","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"be0cb78b-b479-4d19-b644-82ed4c5bd1cc","type":"Circle"},{"attributes":{"overlay":{"id":"0ad34964-6c87-4da9-93fa-f762829ae9a8","type":"BoxAnnotation"}},"id":"2437e60f-0681-47ab-b896-e71f8780073c","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"8f793bc3-416e-424a-aa98-e3982061b54a","type":"Title"},{"attributes":{},"id":"598a9033-f7eb-427d-92e0-a6a0a75d5807","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"e13df77a-5f2e-4637-baaf-3d71543071f8","type":"BasicTickFormatter"},"plot":{"id":"6099774f-cf27-48df-b9ea-dc2185945dfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a8d82c1-725f-46d3-a374-d32211590376","type":"BasicTicker"}},"id":"3b7c866f-ef1d-46b8-a149-33c5124115d7","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]},"selected":{"id":"a0b8f3c3-efa5-450b-947e-519c8ff803de","type":"Selection"},"selection_policy":{"id":"cc5caebe-ade4-43b1-b826-e7ed26fea075","type":"UnionRenderers"}},"id":"0cc4f438-629d-4b87-9338-827eda00b3cc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0cc4f438-629d-4b87-9338-827eda00b3cc","type":"ColumnDataSource"},"glyph":{"id":"95415b02-8ae3-436c-b18f-708908c5afce","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"be0cb78b-b479-4d19-b644-82ed4c5bd1cc","type":"Circle"},"selection_glyph":null,"view":{"id":"8c697f6c-d7ba-4c57-a80d-12179b6a9f72","type":"CDSView"}},"id":"5f6756e8-fd92-4049-a1ff-a87aecba5aab","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"193fd9b5-4757-4b4a-965d-05c70516ebbc","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0ad34964-6c87-4da9-93fa-f762829ae9a8","type":"BoxAnnotation"},{"attributes":{"end":{"id":"2e228b89-f7d0-4847-a7de-62d66798da0b","type":"OpenHead"},"plot":{"id":"6099774f-cf27-48df-b9ea-dc2185945dfd","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"3f6e06be-34bb-48d6-87aa-4260a5927cfd","type":"Arrow"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"95415b02-8ae3-436c-b18f-708908c5afce","type":"Circle"},{"attributes":{},"id":"e3c7b477-ec93-4fa3-84cf-645b7f256c83","type":"BasicTicker"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"2e228b89-f7d0-4847-a7de-62d66798da0b","type":"OpenHead"},{"attributes":{"below":[{"id":"3b7c866f-ef1d-46b8-a149-33c5124115d7","type":"LinearAxis"}],"left":[{"id":"919f205c-880d-4d6a-b33c-19ee391a9d65","type":"LinearAxis"}],"renderers":[{"id":"3b7c866f-ef1d-46b8-a149-33c5124115d7","type":"LinearAxis"},{"id":"31cb61fe-2559-4ecc-b556-bbb9cb48c46b","type":"Grid"},{"id":"919f205c-880d-4d6a-b33c-19ee391a9d65","type":"LinearAxis"},{"id":"cf323cc1-d159-40fe-bb48-13e73097f3fb","type":"Grid"},{"id":"0ad34964-6c87-4da9-93fa-f762829ae9a8","type":"BoxAnnotation"},{"id":"5f6756e8-fd92-4049-a1ff-a87aecba5aab","type":"GlyphRenderer"},{"id":"3f6e06be-34bb-48d6-87aa-4260a5927cfd","type":"Arrow"},{"id":"55d91daa-c701-4589-b067-9933991dbfbd","type":"Arrow"},{"id":"03af7609-88dd-48df-96f4-e425267bfb74","type":"Arrow"}],"title":{"id":"8f793bc3-416e-424a-aa98-e3982061b54a","type":"Title"},"toolbar":{"id":"62a2bb53-b1d5-455d-b425-f8b92c096706","type":"Toolbar"},"x_range":{"id":"193fd9b5-4757-4b4a-965d-05c70516ebbc","type":"DataRange1d"},"x_scale":{"id":"b8ad8580-1f74-4151-85d7-41bf67a6d123","type":"LinearScale"},"y_range":{"id":"b3be994e-ffba-47fa-8b23-5b551672cf78","type":"DataRange1d"},"y_scale":{"id":"40dd3365-c607-479d-8939-ae9619bdc32e","type":"LinearScale"}},"id":"6099774f-cf27-48df-b9ea-dc2185945dfd","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"40dd3365-c607-479d-8939-ae9619bdc32e","type":"LinearScale"},{"attributes":{"callback":null},"id":"b3be994e-ffba-47fa-8b23-5b551672cf78","type":"DataRange1d"},{"attributes":{},"id":"b8ad8580-1f74-4151-85d7-41bf67a6d123","type":"LinearScale"},{"attributes":{},"id":"a0b8f3c3-efa5-450b-947e-519c8ff803de","type":"Selection"},{"attributes":{},"id":"5c3973c6-a1ce-4f6f-bade-b73336852820","type":"ResetTool"},{"attributes":{},"id":"6a8d82c1-725f-46d3-a374-d32211590376","type":"BasicTicker"},{"attributes":{"source":{"id":"0cc4f438-629d-4b87-9338-827eda00b3cc","type":"ColumnDataSource"}},"id":"8c697f6c-d7ba-4c57-a80d-12179b6a9f72","type":"CDSView"},{"attributes":{},"id":"3175fd59-7622-4d3b-a4d8-f9759cf60945","type":"SaveTool"},{"attributes":{"end":{"id":"7dead43f-7458-42e1-9154-8a43e52dabfd","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"6099774f-cf27-48df-b9ea-dc2185945dfd","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"03af7609-88dd-48df-96f4-e425267bfb74","type":"Arrow"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"5dbd021c-630f-44cd-bf5a-16a5074b9069","type":"NormalHead"},{"attributes":{"plot":null,"size":35},"id":"7dead43f-7458-42e1-9154-8a43e52dabfd","type":"VeeHead"},{"attributes":{},"id":"6c576a74-fa35-43eb-8a73-06f58b498d4c","type":"HelpTool"},{"attributes":{},"id":"d3e36466-1767-421a-9390-8531a68ec344","type":"PanTool"},{"attributes":{},"id":"e13df77a-5f2e-4637-baaf-3d71543071f8","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6099774f-cf27-48df-b9ea-dc2185945dfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3c7b477-ec93-4fa3-84cf-645b7f256c83","type":"BasicTicker"}},"id":"cf323cc1-d159-40fe-bb48-13e73097f3fb","type":"Grid"},{"attributes":{"end":{"id":"5dbd021c-630f-44cd-bf5a-16a5074b9069","type":"NormalHead"},"plot":{"id":"6099774f-cf27-48df-b9ea-dc2185945dfd","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"55d91daa-c701-4589-b067-9933991dbfbd","type":"Arrow"},{"attributes":{},"id":"cc5caebe-ade4-43b1-b826-e7ed26fea075","type":"UnionRenderers"}],"root_ids":["6099774f-cf27-48df-b9ea-dc2185945dfd"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"c53807f5-94e2-4113-82fd-1acdc9e8e2dd","roots":{"6099774f-cf27-48df-b9ea-dc2185945dfd":"a3803256-07ec-4d56-9903-6c757bc79044"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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