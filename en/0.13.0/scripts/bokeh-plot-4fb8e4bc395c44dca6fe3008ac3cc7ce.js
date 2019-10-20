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
      };var element = document.getElementById("ac708a2c-f8bb-4f1f-a508-766716c55234");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac708a2c-f8bb-4f1f-a508-766716c55234' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8429f3a7-8f29-4897-9abe-c9c897456202":{"roots":{"references":[{"attributes":{"callback":null,"renderers":"auto"},"id":"6e3c39dc-ccc9-4832-a1a5-2746b489b529","type":"HoverTool"},{"attributes":{},"id":"0008a1de-a30a-488d-a491-4db3c6a1c094","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"c880348d-b6cc-4f1a-bcd1-53f9cb6a6a78","type":"Circle"},{"attributes":{"below":[{"id":"b9d611cf-3918-49e1-a700-63b2760dbd82","type":"LinearAxis"}],"left":[{"id":"17bdda95-ce01-482a-9d33-e4336803c093","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b9d611cf-3918-49e1-a700-63b2760dbd82","type":"LinearAxis"},{"id":"7597a455-8e03-41fe-90b6-dab63e1bfbaf","type":"Grid"},{"id":"17bdda95-ce01-482a-9d33-e4336803c093","type":"LinearAxis"},{"id":"49e8bd9b-90e5-4484-be4e-38f2fe67746f","type":"Grid"},{"id":"275e8704-e8d3-41c5-b3fc-3ffa0695616e","type":"BoxAnnotation"},{"id":"412a4cfc-34bc-4bc9-ae36-9ed96389e1d2","type":"PolyAnnotation"},{"id":"af772c5b-d1a6-4279-ad85-ec71400fccc8","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"bbc41d02-7e90-4f8c-a018-2610789835ae","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1c60ac4f-91aa-416d-b2c3-e2cd74f2a3fa","type":"DataRange1d"},"x_scale":{"id":"96821bdb-dc4a-406c-9294-6348bfa18972","type":"LinearScale"},"y_range":{"id":"84b5c498-00c3-411b-9f3e-2b2c166261c3","type":"DataRange1d"},"y_scale":{"id":"61db5e0f-b2c1-4802-89a4-2a2cbd8d5b86","type":"LinearScale"}},"id":"e5cea275-b01f-4da6-9bb8-338e939f894b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c8b169e3-19b5-484a-86cd-1563e1563897","type":"Selection"},{"attributes":{},"id":"1bd0589d-7410-4a1d-bf1c-2e4a2106b26c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"275e8704-e8d3-41c5-b3fc-3ffa0695616e","type":"BoxAnnotation"}},"id":"1298d95a-400b-4ef5-a748-2a93cface2e1","type":"BoxSelectTool"},{"attributes":{"source":{"id":"6c8d16fe-78f3-46f1-a1c5-6bea6b51dc0f","type":"ColumnDataSource"}},"id":"576edf42-0427-4a13-9f1d-98b245d09702","type":"CDSView"},{"attributes":{"toolbar":{"id":"6728131a-0946-4027-99ff-fbe6111901d8","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"86c64ce3-2aaf-4fc6-b8e3-0183ff5101c2","type":"ToolbarBox"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"bc72ed4a-d7e7-4ce2-9dda-891567c5b031","type":"BooleanFilter"},{"attributes":{"callback":null,"overlay":{"id":"412a4cfc-34bc-4bc9-ae36-9ed96389e1d2","type":"PolyAnnotation"}},"id":"2b474289-f407-4f6d-b3c2-1cfa990be5a4","type":"LassoSelectTool"},{"attributes":{},"id":"42e157d6-6163-46e3-b55d-914d7fa5e8c6","type":"BasicTickFormatter"},{"attributes":{},"id":"b590fffa-20a5-4ed3-843d-ef076678a6c0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"renderers":"auto"},"id":"918193bc-8c81-4426-b778-78478827f8c6","type":"HoverTool"},{"attributes":{"children":[{"id":"86c64ce3-2aaf-4fc6-b8e3-0183ff5101c2","type":"ToolbarBox"},{"id":"71804f18-852f-43e9-834e-eca887c522ea","type":"Column"}]},"id":"dbbf9838-6590-4b84-8a74-05f0a432dfab","type":"Column"},{"attributes":{"callback":null},"id":"1c60ac4f-91aa-416d-b2c3-e2cd74f2a3fa","type":"DataRange1d"},{"attributes":{},"id":"861e908a-9604-4492-9fce-60629ead8498","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"c8b169e3-19b5-484a-86cd-1563e1563897","type":"Selection"},"selection_policy":{"id":"f3f0a189-6ed4-4b9c-8b84-5efa3053799c","type":"UnionRenderers"}},"id":"6c8d16fe-78f3-46f1-a1c5-6bea6b51dc0f","type":"ColumnDataSource"},{"attributes":{},"id":"f3f0a189-6ed4-4b9c-8b84-5efa3053799c","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"52d19db0-7c6f-49e6-bd35-26973346937e","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"275e8704-e8d3-41c5-b3fc-3ffa0695616e","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"e6889d8b-6bfc-4901-a6ad-cbcacd5d5ea7","type":"Circle"},{"attributes":{},"id":"5181f5f3-3dcf-445a-aaca-a46216a36a51","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"412a4cfc-34bc-4bc9-ae36-9ed96389e1d2","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"6c8d16fe-78f3-46f1-a1c5-6bea6b51dc0f","type":"ColumnDataSource"},"glyph":{"id":"58ffa469-0b3b-4151-8efe-150f6a227820","type":"Circle"},"hover_glyph":{"id":"e6889d8b-6bfc-4901-a6ad-cbcacd5d5ea7","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"c880348d-b6cc-4f1a-bcd1-53f9cb6a6a78","type":"Circle"},"selection_glyph":null,"view":{"id":"576edf42-0427-4a13-9f1d-98b245d09702","type":"CDSView"}},"id":"af772c5b-d1a6-4279-ad85-ec71400fccc8","type":"GlyphRenderer"},{"attributes":{},"id":"d785e375-0ca9-48fb-9f82-d1b3bee82a2e","type":"BasicTicker"},{"attributes":{"below":[{"id":"9954f7d6-4e5c-402a-afb7-6e1f707f195e","type":"LinearAxis"}],"left":[{"id":"ca6d689a-af03-4b02-b0cd-ac94d9f3412a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9954f7d6-4e5c-402a-afb7-6e1f707f195e","type":"LinearAxis"},{"id":"a1743a7a-ebe1-42c6-8514-36f4e5d95a8a","type":"Grid"},{"id":"ca6d689a-af03-4b02-b0cd-ac94d9f3412a","type":"LinearAxis"},{"id":"ac0b6c37-790c-4451-948b-8a480e1b070a","type":"Grid"},{"id":"b28f9d2b-0e50-4375-9e83-e21536d2e333","type":"BoxAnnotation"},{"id":"e9fb432a-1969-4ad1-8989-ee703f3abde6","type":"PolyAnnotation"},{"id":"9aa46154-d4b8-4fca-86d8-981525b4eb0a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"28508efe-32b1-43b5-ae1f-888566bcad05","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"eee527cc-b4d2-4f8a-90d9-bbb10e26c725","type":"DataRange1d"},"x_scale":{"id":"1801f146-2ca6-4100-aa06-37099db5694c","type":"LinearScale"},"y_range":{"id":"c8fc02a2-275d-44a9-bf33-0a984cf452d0","type":"DataRange1d"},"y_scale":{"id":"5cde1078-1527-4ac2-a455-91a67c293e46","type":"LinearScale"}},"id":"e42481a5-c0a1-4e2b-80f4-70402639afaa","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"58ffa469-0b3b-4151-8efe-150f6a227820","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"03c06c47-c5e2-4d32-b1a9-7919dfb0dac3","type":"BoxSelectTool"},{"id":"6b1a7e2f-7422-451f-9844-e6da94e22a25","type":"LassoSelectTool"},{"id":"6e3c39dc-ccc9-4832-a1a5-2746b489b529","type":"HoverTool"},{"id":"c2aa2c35-3eb4-45ae-b69b-41e306b9fc44","type":"HelpTool"}]},"id":"28508efe-32b1-43b5-ae1f-888566bcad05","type":"Toolbar"},{"attributes":{"plot":{"id":"e5cea275-b01f-4da6-9bb8-338e939f894b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d785e375-0ca9-48fb-9f82-d1b3bee82a2e","type":"BasicTicker"}},"id":"7597a455-8e03-41fe-90b6-dab63e1bfbaf","type":"Grid"},{"attributes":{"formatter":{"id":"42e157d6-6163-46e3-b55d-914d7fa5e8c6","type":"BasicTickFormatter"},"plot":{"id":"e5cea275-b01f-4da6-9bb8-338e939f894b","subtype":"Figure","type":"Plot"},"ticker":{"id":"5181f5f3-3dcf-445a-aaca-a46216a36a51","type":"BasicTicker"}},"id":"17bdda95-ce01-482a-9d33-e4336803c093","type":"LinearAxis"},{"attributes":{"callback":null},"id":"eee527cc-b4d2-4f8a-90d9-bbb10e26c725","type":"DataRange1d"},{"attributes":{"tools":[{"id":"1298d95a-400b-4ef5-a748-2a93cface2e1","type":"BoxSelectTool"},{"id":"2b474289-f407-4f6d-b3c2-1cfa990be5a4","type":"LassoSelectTool"},{"id":"918193bc-8c81-4426-b778-78478827f8c6","type":"HoverTool"},{"id":"861e908a-9604-4492-9fce-60629ead8498","type":"HelpTool"},{"id":"03c06c47-c5e2-4d32-b1a9-7919dfb0dac3","type":"BoxSelectTool"},{"id":"6b1a7e2f-7422-451f-9844-e6da94e22a25","type":"LassoSelectTool"},{"id":"6e3c39dc-ccc9-4832-a1a5-2746b489b529","type":"HoverTool"},{"id":"c2aa2c35-3eb4-45ae-b69b-41e306b9fc44","type":"HelpTool"}]},"id":"6728131a-0946-4027-99ff-fbe6111901d8","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"84b5c498-00c3-411b-9f3e-2b2c166261c3","type":"DataRange1d"},{"attributes":{"callback":null},"id":"c8fc02a2-275d-44a9-bf33-0a984cf452d0","type":"DataRange1d"},{"attributes":{},"id":"1801f146-2ca6-4100-aa06-37099db5694c","type":"LinearScale"},{"attributes":{},"id":"5cde1078-1527-4ac2-a455-91a67c293e46","type":"LinearScale"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"83b2212c-4851-4d2c-a075-552d48eb4074","type":"Circle"},{"attributes":{"plot":{"id":"e42481a5-c0a1-4e2b-80f4-70402639afaa","subtype":"Figure","type":"Plot"},"ticker":{"id":"41352b3f-99f3-4fd5-8c48-6bc1b497d39c","type":"BasicTicker"}},"id":"a1743a7a-ebe1-42c6-8514-36f4e5d95a8a","type":"Grid"},{"attributes":{"children":[{"id":"e5cea275-b01f-4da6-9bb8-338e939f894b","subtype":"Figure","type":"Plot"},{"id":"e42481a5-c0a1-4e2b-80f4-70402639afaa","subtype":"Figure","type":"Plot"}]},"id":"78ebf795-bbc5-40fe-bec0-b353017b404a","type":"Row"},{"attributes":{"dimension":1,"plot":{"id":"e5cea275-b01f-4da6-9bb8-338e939f894b","subtype":"Figure","type":"Plot"},"ticker":{"id":"5181f5f3-3dcf-445a-aaca-a46216a36a51","type":"BasicTicker"}},"id":"49e8bd9b-90e5-4484-be4e-38f2fe67746f","type":"Grid"},{"attributes":{"filters":[{"id":"bc72ed4a-d7e7-4ce2-9dda-891567c5b031","type":"BooleanFilter"}],"source":{"id":"6c8d16fe-78f3-46f1-a1c5-6bea6b51dc0f","type":"ColumnDataSource"}},"id":"387ceeff-014a-48ab-902a-a7b2852e650e","type":"CDSView"},{"attributes":{"formatter":{"id":"1bd0589d-7410-4a1d-bf1c-2e4a2106b26c","type":"BasicTickFormatter"},"plot":{"id":"e42481a5-c0a1-4e2b-80f4-70402639afaa","subtype":"Figure","type":"Plot"},"ticker":{"id":"41352b3f-99f3-4fd5-8c48-6bc1b497d39c","type":"BasicTicker"}},"id":"9954f7d6-4e5c-402a-afb7-6e1f707f195e","type":"LinearAxis"},{"attributes":{},"id":"61db5e0f-b2c1-4802-89a4-2a2cbd8d5b86","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"e42481a5-c0a1-4e2b-80f4-70402639afaa","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ff745ce-b837-430d-aab7-ff46bae8c720","type":"BasicTicker"}},"id":"ac0b6c37-790c-4451-948b-8a480e1b070a","type":"Grid"},{"attributes":{},"id":"96821bdb-dc4a-406c-9294-6348bfa18972","type":"LinearScale"},{"attributes":{},"id":"41352b3f-99f3-4fd5-8c48-6bc1b497d39c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b590fffa-20a5-4ed3-843d-ef076678a6c0","type":"BasicTickFormatter"},"plot":{"id":"e42481a5-c0a1-4e2b-80f4-70402639afaa","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ff745ce-b837-430d-aab7-ff46bae8c720","type":"BasicTicker"}},"id":"ca6d689a-af03-4b02-b0cd-ac94d9f3412a","type":"LinearAxis"},{"attributes":{},"id":"5ff745ce-b837-430d-aab7-ff46bae8c720","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"b28f9d2b-0e50-4375-9e83-e21536d2e333","type":"BoxAnnotation"}},"id":"03c06c47-c5e2-4d32-b1a9-7919dfb0dac3","type":"BoxSelectTool"},{"attributes":{"formatter":{"id":"0008a1de-a30a-488d-a491-4db3c6a1c094","type":"BasicTickFormatter"},"plot":{"id":"e5cea275-b01f-4da6-9bb8-338e939f894b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d785e375-0ca9-48fb-9f82-d1b3bee82a2e","type":"BasicTicker"}},"id":"b9d611cf-3918-49e1-a700-63b2760dbd82","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1298d95a-400b-4ef5-a748-2a93cface2e1","type":"BoxSelectTool"},{"id":"2b474289-f407-4f6d-b3c2-1cfa990be5a4","type":"LassoSelectTool"},{"id":"918193bc-8c81-4426-b778-78478827f8c6","type":"HoverTool"},{"id":"861e908a-9604-4492-9fce-60629ead8498","type":"HelpTool"}]},"id":"bbc41d02-7e90-4f8c-a018-2610789835ae","type":"Toolbar"},{"attributes":{"data_source":{"id":"6c8d16fe-78f3-46f1-a1c5-6bea6b51dc0f","type":"ColumnDataSource"},"glyph":{"id":"52d19db0-7c6f-49e6-bd35-26973346937e","type":"Circle"},"hover_glyph":{"id":"83b2212c-4851-4d2c-a075-552d48eb4074","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"b68d4ca9-cf6e-4def-9c2e-82a9ad98bfd1","type":"Circle"},"selection_glyph":null,"view":{"id":"387ceeff-014a-48ab-902a-a7b2852e650e","type":"CDSView"}},"id":"9aa46154-d4b8-4fca-86d8-981525b4eb0a","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"78ebf795-bbc5-40fe-bec0-b353017b404a","type":"Row"}]},"id":"71804f18-852f-43e9-834e-eca887c522ea","type":"Column"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b28f9d2b-0e50-4375-9e83-e21536d2e333","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"e9fb432a-1969-4ad1-8989-ee703f3abde6","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"b68d4ca9-cf6e-4def-9c2e-82a9ad98bfd1","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"e9fb432a-1969-4ad1-8989-ee703f3abde6","type":"PolyAnnotation"}},"id":"6b1a7e2f-7422-451f-9844-e6da94e22a25","type":"LassoSelectTool"},{"attributes":{},"id":"c2aa2c35-3eb4-45ae-b69b-41e306b9fc44","type":"HelpTool"}],"root_ids":["dbbf9838-6590-4b84-8a74-05f0a432dfab"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"8429f3a7-8f29-4897-9abe-c9c897456202","roots":{"dbbf9838-6590-4b84-8a74-05f0a432dfab":"ac708a2c-f8bb-4f1f-a508-766716c55234"}}];
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