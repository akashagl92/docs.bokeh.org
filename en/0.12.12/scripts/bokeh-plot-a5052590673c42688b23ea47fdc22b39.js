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
      };var element = document.getElementById("8baa2d90-1b9b-4ccf-8b53-3beda0fb7d12");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8baa2d90-1b9b-4ccf-8b53-3beda0fb7d12' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"5e5cbdcf-d00c-42ed-b894-80605a0f4b4f":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"878ba492-d3fa-4eb0-bd1f-431bc2df53b3","type":"Circle"},{"attributes":{"filters":[{"id":"aa5696a2-ef1a-4bcb-bef3-ddb08b3b5248","type":"BooleanFilter"}],"source":{"id":"349f4445-aba8-4591-b67e-54efd4d29345","type":"ColumnDataSource"}},"id":"b2f84434-e03a-4fcf-a0ac-8012c2a5a81c","type":"CDSView"},{"attributes":{"children":[{"id":"e9936aae-f381-4e59-a20e-11bf77a8474e","subtype":"Figure","type":"Plot"},{"id":"8ea08192-ab81-41f3-89ff-e23849b42793","subtype":"Figure","type":"Plot"}]},"id":"bd6b68c2-30ce-4f80-89a5-a8b6cae4a19f","type":"Row"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9c739631-fc2a-4078-911c-2ce77a4235ff","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8ea08192-ab81-41f3-89ff-e23849b42793","subtype":"Figure","type":"Plot"},"ticker":{"id":"620f472a-0041-437f-ac84-fecdd7ada634","type":"BasicTicker"}},"id":"3d42e7ac-655e-4ebe-8f5f-ccc0394b6a6b","type":"Grid"},{"attributes":{},"id":"d598a6c5-9f1e-4afa-89ac-a00dd7c19fb1","type":"HelpTool"},{"attributes":{"callback":null},"id":"7dada1a3-259d-413a-9c8a-e1f169e159c4","type":"HoverTool"},{"attributes":{"below":[{"id":"41a27f39-1948-4794-8f77-dfdf3c1dd272","type":"LinearAxis"}],"left":[{"id":"4f28eeea-1fac-45ad-abe0-9fd3bd4370a7","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"41a27f39-1948-4794-8f77-dfdf3c1dd272","type":"LinearAxis"},{"id":"3d42e7ac-655e-4ebe-8f5f-ccc0394b6a6b","type":"Grid"},{"id":"4f28eeea-1fac-45ad-abe0-9fd3bd4370a7","type":"LinearAxis"},{"id":"e85e0fb7-72b9-4ab7-ad3a-e7abcd156032","type":"Grid"},{"id":"9c739631-fc2a-4078-911c-2ce77a4235ff","type":"BoxAnnotation"},{"id":"61e3248e-74b4-4699-90c8-9af9aea6def8","type":"PolyAnnotation"},{"id":"5ee893d6-19df-4b0c-bc83-01e2d8b62fe3","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9f20b8e8-2cc1-4cd0-9a13-142dcb285764","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6e5fcec8-9a4e-435b-8bf0-a21d70480553","type":"DataRange1d"},"x_scale":{"id":"14bc1828-aa15-493a-a17f-fadff7ef7d31","type":"LinearScale"},"y_range":{"id":"b7424b77-e7ec-4ec0-a626-c8ab877c1fea","type":"DataRange1d"},"y_scale":{"id":"08612c53-1e2b-4308-b397-0f12e13d099d","type":"LinearScale"}},"id":"8ea08192-ab81-41f3-89ff-e23849b42793","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"61e3248e-74b4-4699-90c8-9af9aea6def8","type":"PolyAnnotation"}},"id":"1bebbcd4-e8b8-4e0a-89dc-0e1327056579","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"b7e05abe-0c49-4835-9ee9-94dee449ab7d","type":"BasicTickFormatter"},"plot":{"id":"e9936aae-f381-4e59-a20e-11bf77a8474e","subtype":"Figure","type":"Plot"},"ticker":{"id":"63727e8c-11ea-484f-acfd-fdc29c865902","type":"BasicTicker"}},"id":"90f8e511-0d3c-4ad8-a0e5-362a48a3e692","type":"LinearAxis"},{"attributes":{},"id":"b88a2b9f-de53-4c6d-97e3-3ee60ad112a2","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"acbc52dc-7afc-4fce-b3cc-7bbb660b15c1","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"9c739631-fc2a-4078-911c-2ce77a4235ff","type":"BoxAnnotation"},"renderers":[{"id":"5ee893d6-19df-4b0c-bc83-01e2d8b62fe3","type":"GlyphRenderer"}]},"id":"a12de78f-db9a-4c51-9335-45062a8f52eb","type":"BoxSelectTool"},{"attributes":{},"id":"63727e8c-11ea-484f-acfd-fdc29c865902","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"349f4445-aba8-4591-b67e-54efd4d29345","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"b60e5954-3689-434e-9be1-1986097f58ce","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"e9936aae-f381-4e59-a20e-11bf77a8474e","subtype":"Figure","type":"Plot"},"ticker":{"id":"63727e8c-11ea-484f-acfd-fdc29c865902","type":"BasicTicker"}},"id":"f9e6860d-a5e0-4040-8733-0c814c84b4ef","type":"Grid"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"b10d0e9b-4231-4731-8753-f428065d9fa3","type":"Circle"},{"attributes":{"tools":[{"id":"5801af69-8e05-4a3a-9672-dccc623e0c0c","type":"BoxSelectTool"},{"id":"5024c271-a02d-41d5-bcb5-55526ef8e098","type":"LassoSelectTool"},{"id":"5877b0ac-c588-44b8-8bce-21e5205853a3","type":"HoverTool"},{"id":"0dc82b23-25fa-4e76-a228-4b2126615fef","type":"HelpTool"},{"id":"a12de78f-db9a-4c51-9335-45062a8f52eb","type":"BoxSelectTool"},{"id":"1bebbcd4-e8b8-4e0a-89dc-0e1327056579","type":"LassoSelectTool"},{"id":"7dada1a3-259d-413a-9c8a-e1f169e159c4","type":"HoverTool"},{"id":"d598a6c5-9f1e-4afa-89ac-a00dd7c19fb1","type":"HelpTool"}]},"id":"d0bed463-cdf5-4ed4-aa0e-a9f06a5b155c","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"bdd468e7-73e3-4fec-93ad-24a460e88c92","type":"Circle"},{"attributes":{"children":[{"id":"bd6b68c2-30ce-4f80-89a5-a8b6cae4a19f","type":"Row"}]},"id":"037532e9-bc52-4414-9e62-d633f397f843","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"62a19cb2-12f3-4520-aa65-9785c69cf22b","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"ecd0a4cb-7c76-42f8-b199-ced9939b2e3b","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"62a19cb2-12f3-4520-aa65-9785c69cf22b","type":"BoxAnnotation"},"renderers":[{"id":"aa23ef6f-2fed-4b8b-8307-377db57e971c","type":"GlyphRenderer"}]},"id":"5801af69-8e05-4a3a-9672-dccc623e0c0c","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"8742406d-52d5-462a-825e-57eaf55253a1","type":"ToolbarBox"},{"id":"037532e9-bc52-4414-9e62-d633f397f843","type":"Column"}]},"id":"5234c3f1-3449-47b9-820d-88bb59a0bf65","type":"Column"},{"attributes":{"callback":null},"id":"c53291a7-fa22-4208-b887-6d5846fdf478","type":"DataRange1d"},{"attributes":{"source":{"id":"349f4445-aba8-4591-b67e-54efd4d29345","type":"ColumnDataSource"}},"id":"c4fdae2e-ba76-4b55-90cd-5d50f7cc4ab9","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"acbc52dc-7afc-4fce-b3cc-7bbb660b15c1","type":"PolyAnnotation"}},"id":"5024c271-a02d-41d5-bcb5-55526ef8e098","type":"LassoSelectTool"},{"attributes":{},"id":"9873cb25-a3da-4b39-af34-cffa4120b055","type":"LinearScale"},{"attributes":{"callback":null},"id":"5877b0ac-c588-44b8-8bce-21e5205853a3","type":"HoverTool"},{"attributes":{},"id":"0dc82b23-25fa-4e76-a228-4b2126615fef","type":"HelpTool"},{"attributes":{"data_source":{"id":"349f4445-aba8-4591-b67e-54efd4d29345","type":"ColumnDataSource"},"glyph":{"id":"bdd468e7-73e3-4fec-93ad-24a460e88c92","type":"Circle"},"hover_glyph":{"id":"ecd0a4cb-7c76-42f8-b199-ced9939b2e3b","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"b60e5954-3689-434e-9be1-1986097f58ce","type":"Circle"},"selection_glyph":null,"view":{"id":"c4fdae2e-ba76-4b55-90cd-5d50f7cc4ab9","type":"CDSView"}},"id":"aa23ef6f-2fed-4b8b-8307-377db57e971c","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"8ea08192-ab81-41f3-89ff-e23849b42793","subtype":"Figure","type":"Plot"},"ticker":{"id":"501142fc-108d-43b4-96c7-c0d06274fc24","type":"BasicTicker"}},"id":"e85e0fb7-72b9-4ab7-ad3a-e7abcd156032","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a12de78f-db9a-4c51-9335-45062a8f52eb","type":"BoxSelectTool"},{"id":"1bebbcd4-e8b8-4e0a-89dc-0e1327056579","type":"LassoSelectTool"},{"id":"7dada1a3-259d-413a-9c8a-e1f169e159c4","type":"HoverTool"},{"id":"d598a6c5-9f1e-4afa-89ac-a00dd7c19fb1","type":"HelpTool"}]},"id":"9f20b8e8-2cc1-4cd0-9a13-142dcb285764","type":"Toolbar"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"aa5696a2-ef1a-4bcb-bef3-ddb08b3b5248","type":"BooleanFilter"},{"attributes":{},"id":"501142fc-108d-43b4-96c7-c0d06274fc24","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"61e3248e-74b4-4699-90c8-9af9aea6def8","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"6e5fcec8-9a4e-435b-8bf0-a21d70480553","type":"DataRange1d"},{"attributes":{},"id":"ac845068-4219-446e-8128-8841b14fbe4b","type":"BasicTicker"},{"attributes":{},"id":"857674e8-374f-4e59-a44c-8face9dee8de","type":"BasicTickFormatter"},{"attributes":{},"id":"b7e05abe-0c49-4835-9ee9-94dee449ab7d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"349f4445-aba8-4591-b67e-54efd4d29345","type":"ColumnDataSource"},"glyph":{"id":"52265cd7-5030-434b-8137-ce594148d8b5","type":"Circle"},"hover_glyph":{"id":"b10d0e9b-4231-4731-8753-f428065d9fa3","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"878ba492-d3fa-4eb0-bd1f-431bc2df53b3","type":"Circle"},"selection_glyph":null,"view":{"id":"b2f84434-e03a-4fcf-a0ac-8012c2a5a81c","type":"CDSView"}},"id":"5ee893d6-19df-4b0c-bc83-01e2d8b62fe3","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"50c31a16-3e9a-4703-9077-c3128e031671","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"52265cd7-5030-434b-8137-ce594148d8b5","type":"Circle"},{"attributes":{"formatter":{"id":"857674e8-374f-4e59-a44c-8face9dee8de","type":"BasicTickFormatter"},"plot":{"id":"e9936aae-f381-4e59-a20e-11bf77a8474e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac845068-4219-446e-8128-8841b14fbe4b","type":"BasicTicker"}},"id":"32d8a1fb-e962-418c-89eb-130e47f7e9f5","type":"LinearAxis"},{"attributes":{},"id":"14bc1828-aa15-493a-a17f-fadff7ef7d31","type":"LinearScale"},{"attributes":{},"id":"620f472a-0041-437f-ac84-fecdd7ada634","type":"BasicTicker"},{"attributes":{},"id":"ce06b6e3-dadd-477b-aa76-c0719044fdbf","type":"BasicTickFormatter"},{"attributes":{},"id":"d68b1b5a-4ea6-4b0a-b3a5-7df5c24739ea","type":"LinearScale"},{"attributes":{"formatter":{"id":"b88a2b9f-de53-4c6d-97e3-3ee60ad112a2","type":"BasicTickFormatter"},"plot":{"id":"8ea08192-ab81-41f3-89ff-e23849b42793","subtype":"Figure","type":"Plot"},"ticker":{"id":"501142fc-108d-43b4-96c7-c0d06274fc24","type":"BasicTicker"}},"id":"4f28eeea-1fac-45ad-abe0-9fd3bd4370a7","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5801af69-8e05-4a3a-9672-dccc623e0c0c","type":"BoxSelectTool"},{"id":"5024c271-a02d-41d5-bcb5-55526ef8e098","type":"LassoSelectTool"},{"id":"5877b0ac-c588-44b8-8bce-21e5205853a3","type":"HoverTool"},{"id":"0dc82b23-25fa-4e76-a228-4b2126615fef","type":"HelpTool"}]},"id":"0d6fe3b7-e7a1-460e-9994-dee2c314dcd5","type":"Toolbar"},{"attributes":{"callback":null},"id":"b7424b77-e7ec-4ec0-a626-c8ab877c1fea","type":"DataRange1d"},{"attributes":{"below":[{"id":"32d8a1fb-e962-418c-89eb-130e47f7e9f5","type":"LinearAxis"}],"left":[{"id":"90f8e511-0d3c-4ad8-a0e5-362a48a3e692","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32d8a1fb-e962-418c-89eb-130e47f7e9f5","type":"LinearAxis"},{"id":"71756f95-9252-4a86-bc6b-f736573be1f4","type":"Grid"},{"id":"90f8e511-0d3c-4ad8-a0e5-362a48a3e692","type":"LinearAxis"},{"id":"f9e6860d-a5e0-4040-8733-0c814c84b4ef","type":"Grid"},{"id":"62a19cb2-12f3-4520-aa65-9785c69cf22b","type":"BoxAnnotation"},{"id":"acbc52dc-7afc-4fce-b3cc-7bbb660b15c1","type":"PolyAnnotation"},{"id":"aa23ef6f-2fed-4b8b-8307-377db57e971c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"0d6fe3b7-e7a1-460e-9994-dee2c314dcd5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c53291a7-fa22-4208-b887-6d5846fdf478","type":"DataRange1d"},"x_scale":{"id":"9873cb25-a3da-4b39-af34-cffa4120b055","type":"LinearScale"},"y_range":{"id":"50c31a16-3e9a-4703-9077-c3128e031671","type":"DataRange1d"},"y_scale":{"id":"d68b1b5a-4ea6-4b0a-b3a5-7df5c24739ea","type":"LinearScale"}},"id":"e9936aae-f381-4e59-a20e-11bf77a8474e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"e9936aae-f381-4e59-a20e-11bf77a8474e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac845068-4219-446e-8128-8841b14fbe4b","type":"BasicTicker"}},"id":"71756f95-9252-4a86-bc6b-f736573be1f4","type":"Grid"},{"attributes":{},"id":"08612c53-1e2b-4308-b397-0f12e13d099d","type":"LinearScale"},{"attributes":{"toolbar":{"id":"d0bed463-cdf5-4ed4-aa0e-a9f06a5b155c","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"8742406d-52d5-462a-825e-57eaf55253a1","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"ce06b6e3-dadd-477b-aa76-c0719044fdbf","type":"BasicTickFormatter"},"plot":{"id":"8ea08192-ab81-41f3-89ff-e23849b42793","subtype":"Figure","type":"Plot"},"ticker":{"id":"620f472a-0041-437f-ac84-fecdd7ada634","type":"BasicTicker"}},"id":"41a27f39-1948-4794-8f77-dfdf3c1dd272","type":"LinearAxis"}],"root_ids":["5234c3f1-3449-47b9-820d-88bb59a0bf65"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"5e5cbdcf-d00c-42ed-b894-80605a0f4b4f","elementid":"8baa2d90-1b9b-4ccf-8b53-3beda0fb7d12","modelid":"5234c3f1-3449-47b9-820d-88bb59a0bf65"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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