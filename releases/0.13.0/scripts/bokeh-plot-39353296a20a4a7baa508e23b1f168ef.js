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
      };var element = document.getElementById("8c616a22-496b-4874-8232-835bd24dc5fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8c616a22-496b-4874-8232-835bd24dc5fe' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"be4f2323-36a0-4c97-9020-97f9f8c87325":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"Bv7AOBV3BsAq6L7y4/sCwGHVp7n10Pm/FPUxVXDY+b9AtfObA2Pdv6gE0V+Omdu/","dtype":"float64","shape":[6]}},"selected":{"id":"975ce70d-9dc3-4a2e-80ff-59dd0d95c18e","type":"Selection"},"selection_policy":{"id":"654763f4-2191-43b9-b3e5-cadf481911d8","type":"UnionRenderers"}},"id":"0b55ed89-711b-4561-bde6-0d503700f764","type":"ColumnDataSource"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"d7b22035-6a1c-4ee1-bd1d-fefc9eba417a","type":"Segment"},{"attributes":{},"id":"47fe7296-9d9b-49f5-b438-975d2b4ec99e","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"0b55ed89-711b-4561-bde6-0d503700f764","type":"ColumnDataSource"},"glyph":{"id":"7d16a24d-8783-418c-aec5-e9bd6723e067","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d27395a5-0af4-448c-bf7d-526786cf492a","type":"Rect"},"selection_glyph":null,"view":{"id":"1c8b7869-5bf7-4faa-b9d1-c03042925443","type":"CDSView"}},"id":"2c9ed712-d4f9-42ba-a467-108cfc9785df","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"20ee80e5-03ef-4890-b94d-2e1038d01588","type":"ColumnDataSource"},"glyph":{"id":"d7b22035-6a1c-4ee1-bd1d-fefc9eba417a","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"45592551-2433-4df2-bfee-54a95ed3338e","type":"Segment"},"selection_glyph":null,"view":{"id":"380297b3-25be-4840-8055-c923b689ff5c","type":"CDSView"}},"id":"1970be83-a620-4374-9093-f13674ec8162","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"7195e636-34be-4218-a9ff-04bc33051c2f","type":"VBar"},{"attributes":{},"id":"40489e6e-54a6-49b3-8276-b471c2311cfc","type":"Selection"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"8ead31be-d57f-4e09-abb0-e432f11dc394","type":"FactorRange"},{"attributes":{"source":{"id":"750342bc-4a7c-411a-9556-f157a7168ff1","type":"ColumnDataSource"}},"id":"444db447-57dd-40c2-ab0a-e43964c31a39","type":"CDSView"},{"attributes":{"source":{"id":"20ee80e5-03ef-4890-b94d-2e1038d01588","type":"ColumnDataSource"}},"id":"380297b3-25be-4840-8055-c923b689ff5c","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":["a","a","a","b","b","b","b","b","c","c","e","e","e","e","e","e"],"y":[2.9918542449827297,3.673601538300737,-3.1917961557449677,-2.4163700157705166,-3.013514304592756,3.1836747032118766,2.9812028928831165,2.5171707928430087,-1.7268705954213104,-2.008224029182337,4.817002439909585,4.970308278918584,-0.6607821762011055,-0.4848905299010231,-0.6737087670237325,5.636247718984371]},"selected":{"id":"9a4785ab-c703-410d-9832-ea1689156922","type":"Selection"},"selection_policy":{"id":"3cb7b7cf-7ecb-4865-a1db-3fc089bc868e","type":"UnionRenderers"}},"id":"7590fb91-affd-4c64-b4ac-b2686cec95c8","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5707894f-07b1-4725-810e-453ec8e601dd","type":"SaveTool"}]},"id":"4a75a3e1-e3f2-4df7-8452-bf2b2a19928b","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"44649936-fa41-4fd5-9dc1-6718638067cb","type":"Rect"},{"attributes":{"data_source":{"id":"750342bc-4a7c-411a-9556-f157a7168ff1","type":"ColumnDataSource"},"glyph":{"id":"b50895dd-a770-41cd-a657-ed2b1abf2310","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7195e636-34be-4218-a9ff-04bc33051c2f","type":"VBar"},"selection_glyph":null,"view":{"id":"444db447-57dd-40c2-ab0a-e43964c31a39","type":"CDSView"}},"id":"b13831b3-679a-46fa-882a-1e0c4f52c7e6","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d16a24d-8783-418c-aec5-e9bd6723e067","type":"Rect"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"469bed0a-5f01-4481-8458-89efceba5f45","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d8c9e43-3e55-4e5b-a340-84629fe0a21c","type":"CategoricalTicker"}},"id":"22704103-0737-438d-a516-b077aad14d88","type":"Grid"},{"attributes":{},"id":"d7fcb4ba-e817-4761-af89-7cad5e775215","type":"Selection"},{"attributes":{"source":{"id":"0b55ed89-711b-4561-bde6-0d503700f764","type":"ColumnDataSource"}},"id":"1c8b7869-5bf7-4faa-b9d1-c03042925443","type":"CDSView"},{"attributes":{},"id":"34fe140b-5ed6-4e23-b8c5-3df3d904c32d","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"5037f213-0702-4618-92fb-93b256b21ac9","type":"ColumnDataSource"}},"id":"5827a067-8c4b-4507-9b90-2c142cf87a34","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"eebe8dbe-f9bf-4968-9ab8-608c3512d3dc","type":"Circle"},{"attributes":{},"id":"840810f3-2a44-407b-8a20-ef375c3b7ec1","type":"UnionRenderers"},{"attributes":{},"id":"654763f4-2191-43b9-b3e5-cadf481911d8","type":"UnionRenderers"},{"attributes":{},"id":"ac00ec29-037d-442c-a230-91d2e08ccfb4","type":"BasicTicker"},{"attributes":{},"id":"4d8c9e43-3e55-4e5b-a340-84629fe0a21c","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"kh9juS2qBkCGIRhWngwDQO+/o9InHwxA+/9Tu9UIC0BgMZHG7qcSQDQmJKEsSBJA","dtype":"float64","shape":[6]}},"selected":{"id":"86e84db6-0a5c-480d-8211-fcd4c8ffdd94","type":"Selection"},"selection_policy":{"id":"47fe7296-9d9b-49f5-b438-975d2b4ec99e","type":"UnionRenderers"}},"id":"68abf92a-a7fe-4480-ab61-bc6b6c3d8d49","type":"ColumnDataSource"},{"attributes":{},"id":"0578d61d-58d0-4afe-9b79-1aa901ea5843","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"d22418d2-0a2c-41a0-811a-f9f96c1967c4","type":"ColumnDataSource"},"glyph":{"id":"4b9b4d79-db72-4e97-8980-23b7be0bcc89","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ff7fc91f-9923-47b7-9566-faf94c8cc3be","type":"Segment"},"selection_glyph":null,"view":{"id":"61ba7d8e-f922-44a5-8736-2c00cfedf56b","type":"CDSView"}},"id":"4071f54c-ab5c-45b7-b22b-c3dd194ba697","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5037f213-0702-4618-92fb-93b256b21ac9","type":"ColumnDataSource"},"glyph":{"id":"ff21d4fe-21db-452f-894f-e434ab28da81","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55eb1800-f93c-4cea-8efd-462656815597","type":"VBar"},"selection_glyph":null,"view":{"id":"5827a067-8c4b-4507-9b90-2c142cf87a34","type":"CDSView"}},"id":"be632580-f2b4-442f-8fc7-cafca3c4e487","type":"GlyphRenderer"},{"attributes":{},"id":"113bf7b2-b034-4dc6-b0db-bf9a023d9710","type":"Selection"},{"attributes":{},"id":"13a15bb1-059c-4164-bc5e-337615deaed1","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"ff7fc91f-9923-47b7-9566-faf94c8cc3be","type":"Segment"},{"attributes":{"callback":null},"id":"91213fcd-2cc0-4358-990a-a7f47061caa5","type":"DataRange1d"},{"attributes":{},"id":"5707894f-07b1-4725-810e-453ec8e601dd","type":"SaveTool"},{"attributes":{"source":{"id":"d22418d2-0a2c-41a0-811a-f9f96c1967c4","type":"ColumnDataSource"}},"id":"61ba7d8e-f922-44a5-8736-2c00cfedf56b","type":"CDSView"},{"attributes":{},"id":"9a4785ab-c703-410d-9832-ea1689156922","type":"Selection"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"ff21d4fe-21db-452f-894f-e434ab28da81","type":"VBar"},{"attributes":{},"id":"3cb7b7cf-7ecb-4865-a1db-3fc089bc868e","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"45592551-2433-4df2-bfee-54a95ed3338e","type":"Segment"},{"attributes":{"formatter":{"id":"167bad7f-c444-4c5c-99cd-1e449b8a8f04","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"469bed0a-5f01-4481-8458-89efceba5f45","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d8c9e43-3e55-4e5b-a340-84629fe0a21c","type":"CategoricalTicker"}},"id":"7d8d6436-818c-4227-9c6c-f536b3851ee7","type":"CategoricalAxis"},{"attributes":{},"id":"5936986e-61fb-400d-9086-701f2edb8f23","type":"Selection"},{"attributes":{"formatter":{"id":"34fe140b-5ed6-4e23-b8c5-3df3d904c32d","type":"BasicTickFormatter"},"plot":{"id":"469bed0a-5f01-4481-8458-89efceba5f45","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac00ec29-037d-442c-a230-91d2e08ccfb4","type":"BasicTicker"}},"id":"e00993fb-8d7b-42fb-b23e-766bd1c233a1","type":"LinearAxis"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"4b9b4d79-db72-4e97-8980-23b7be0bcc89","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e8850e8-8d86-48a2-8dce-2e66d6149f4a","type":"Circle"},{"attributes":{"source":{"id":"7590fb91-affd-4c64-b4ac-b2686cec95c8","type":"ColumnDataSource"}},"id":"6dbc1731-f609-4f37-85e3-b52d5c4e840c","type":"CDSView"},{"attributes":{"data_source":{"id":"68abf92a-a7fe-4480-ab61-bc6b6c3d8d49","type":"ColumnDataSource"},"glyph":{"id":"44649936-fa41-4fd5-9dc1-6718638067cb","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1ed86106-c63c-4467-ae95-9728cd35e5cc","type":"Rect"},"selection_glyph":null,"view":{"id":"15556e4f-8576-4031-8ef4-5c22c80ffe7f","type":"CDSView"}},"id":"463d5639-61e1-4a58-85b7-2d5aefb59210","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ed86106-c63c-4467-ae95-9728cd35e5cc","type":"Rect"},{"attributes":{},"id":"86e84db6-0a5c-480d-8211-fcd4c8ffdd94","type":"Selection"},{"attributes":{},"id":"975ce70d-9dc3-4a2e-80ff-59dd0d95c18e","type":"Selection"},{"attributes":{"data_source":{"id":"7590fb91-affd-4c64-b4ac-b2686cec95c8","type":"ColumnDataSource"},"glyph":{"id":"4e8850e8-8d86-48a2-8dce-2e66d6149f4a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eebe8dbe-f9bf-4968-9ab8-608c3512d3dc","type":"Circle"},"selection_glyph":null,"view":{"id":"6dbc1731-f609-4f37-85e3-b52d5c4e840c","type":"CDSView"}},"id":"dd295dac-0c8b-4d4b-8a32-ea772cbcd4f2","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"Ju+AGezIxT+tfJM/Q26Lv1qjCV+OiPE/SOahA7X+8T855oqadIMAQO3o+Q2gnABA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"tsvNd3Aq5r8fErldzOLiv/gCnAZYCtg/sFIz01NF1j++tXuZbWT3P6B+Ceph6vQ/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"d7fcb4ba-e817-4761-af89-7cad5e775215","type":"Selection"},"selection_policy":{"id":"840810f3-2a44-407b-8a20-ef375c3b7ec1","type":"UnionRenderers"}},"id":"750342bc-4a7c-411a-9556-f157a7168ff1","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"Bv7AOBV3BsAq6L7y4/sCwGHVp7n10Pm/FPUxVXDY+b9AtfObA2Pdv6gE0V+Omdu/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"tsvNd3Aq5r8fErldzOLiv/gCnAZYCtg/sFIz01NF1j++tXuZbWT3P6B+Ceph6vQ/","dtype":"float64","shape":[6]}},"selected":{"id":"5936986e-61fb-400d-9086-701f2edb8f23","type":"Selection"},"selection_policy":{"id":"15da320d-9fbd-4890-b414-1b7b91a47d48","type":"UnionRenderers"}},"id":"20ee80e5-03ef-4890-b94d-2e1038d01588","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"41FWetL25j+Q9x3rtSXjPyg6hn5IOvs/iI3P9c/X+j85EeZMRvEFQG03FoJ7DgZA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"Ju+AGezIxT+tfJM/Q26Lv1qjCV+OiPE/SOahA7X+8T855oqadIMAQO3o+Q2gnABA","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]},"selected":{"id":"40489e6e-54a6-49b3-8276-b471c2311cfc","type":"Selection"},"selection_policy":{"id":"58254eda-7ca4-45b0-9e95-dd45f6c73e7c","type":"UnionRenderers"}},"id":"5037f213-0702-4618-92fb-93b256b21ac9","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"55eb1800-f93c-4cea-8efd-462656815597","type":"VBar"},{"attributes":{},"id":"167bad7f-c444-4c5c-99cd-1e449b8a8f04","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"469bed0a-5f01-4481-8458-89efceba5f45","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac00ec29-037d-442c-a230-91d2e08ccfb4","type":"BasicTicker"}},"id":"f7ac2b90-b2f9-4827-8b43-293830e34c33","type":"Grid"},{"attributes":{"source":{"id":"68abf92a-a7fe-4480-ab61-bc6b6c3d8d49","type":"ColumnDataSource"}},"id":"15556e4f-8576-4031-8ef4-5c22c80ffe7f","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"7ff2a744-0884-4bb5-aa97-e660c8373fd2","type":"Title"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"b50895dd-a770-41cd-a657-ed2b1abf2310","type":"VBar"},{"attributes":{},"id":"58254eda-7ca4-45b0-9e95-dd45f6c73e7c","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"kh9juS2qBkCGIRhWngwDQO+/o9InHwxA+/9Tu9UIC0BgMZHG7qcSQDQmJKEsSBJA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"41FWetL25j+Q9x3rtSXjPyg6hn5IOvs/iI3P9c/X+j85EeZMRvEFQG03FoJ7DgZA","dtype":"float64","shape":[6]}},"selected":{"id":"113bf7b2-b034-4dc6-b0db-bf9a023d9710","type":"Selection"},"selection_policy":{"id":"dd4e8c57-65dc-461e-8b92-0b2d5c81ff93","type":"UnionRenderers"}},"id":"d22418d2-0a2c-41a0-811a-f9f96c1967c4","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d27395a5-0af4-448c-bf7d-526786cf492a","type":"Rect"},{"attributes":{},"id":"15da320d-9fbd-4890-b414-1b7b91a47d48","type":"UnionRenderers"},{"attributes":{},"id":"dd4e8c57-65dc-461e-8b92-0b2d5c81ff93","type":"UnionRenderers"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"7d8d6436-818c-4227-9c6c-f536b3851ee7","type":"CategoricalAxis"}],"left":[{"id":"e00993fb-8d7b-42fb-b23e-766bd1c233a1","type":"LinearAxis"}],"renderers":[{"id":"7d8d6436-818c-4227-9c6c-f536b3851ee7","type":"CategoricalAxis"},{"id":"22704103-0737-438d-a516-b077aad14d88","type":"Grid"},{"id":"e00993fb-8d7b-42fb-b23e-766bd1c233a1","type":"LinearAxis"},{"id":"f7ac2b90-b2f9-4827-8b43-293830e34c33","type":"Grid"},{"id":"4071f54c-ab5c-45b7-b22b-c3dd194ba697","type":"GlyphRenderer"},{"id":"1970be83-a620-4374-9093-f13674ec8162","type":"GlyphRenderer"},{"id":"be632580-f2b4-442f-8fc7-cafca3c4e487","type":"GlyphRenderer"},{"id":"b13831b3-679a-46fa-882a-1e0c4f52c7e6","type":"GlyphRenderer"},{"id":"2c9ed712-d4f9-42ba-a467-108cfc9785df","type":"GlyphRenderer"},{"id":"463d5639-61e1-4a58-85b7-2d5aefb59210","type":"GlyphRenderer"},{"id":"dd295dac-0c8b-4d4b-8a32-ea772cbcd4f2","type":"GlyphRenderer"}],"title":{"id":"7ff2a744-0884-4bb5-aa97-e660c8373fd2","type":"Title"},"toolbar":{"id":"4a75a3e1-e3f2-4df7-8452-bf2b2a19928b","type":"Toolbar"},"x_range":{"id":"8ead31be-d57f-4e09-abb0-e432f11dc394","type":"FactorRange"},"x_scale":{"id":"0578d61d-58d0-4afe-9b79-1aa901ea5843","type":"CategoricalScale"},"y_range":{"id":"91213fcd-2cc0-4358-990a-a7f47061caa5","type":"DataRange1d"},"y_scale":{"id":"13a15bb1-059c-4164-bc5e-337615deaed1","type":"LinearScale"}},"id":"469bed0a-5f01-4481-8458-89efceba5f45","subtype":"Figure","type":"Plot"}],"root_ids":["469bed0a-5f01-4481-8458-89efceba5f45"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"be4f2323-36a0-4c97-9020-97f9f8c87325","roots":{"469bed0a-5f01-4481-8458-89efceba5f45":"8c616a22-496b-4874-8232-835bd24dc5fe"}}];
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