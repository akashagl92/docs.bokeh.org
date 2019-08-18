
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
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
  };var element = document.getElementById("267b8797-5a13-4022-bc91-7f73ac7705da");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '267b8797-5a13-4022-bc91-7f73ac7705da' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"a5633322-f736-43bc-b4fa-23b0efccf62a":{"roots":{"references":[{"attributes":{"plot":{"id":"59deb205-b5b9-4288-b9ff-50d0982f34c6","type":"Plot"},"ticker":{"id":"e8e8710a-40bb-4b9e-ad9e-dc2f3000bcf2","type":"BasicTicker"}},"id":"49c4d29c-3074-4642-b0a4-3f25eb22f03c","type":"Grid"},{"attributes":{},"id":"a646d225-9619-46cc-8d28-42feeafc8371","type":"BasicTickFormatter"},{"attributes":{},"id":"e8e8710a-40bb-4b9e-ad9e-dc2f3000bcf2","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c30880da-fbdd-4c17-ab5c-ef2b3692d6d0","type":"BasicTickFormatter"},"plot":{"id":"59deb205-b5b9-4288-b9ff-50d0982f34c6","type":"Plot"},"ticker":{"id":"549a6ab0-65cf-4e2d-9f7d-bef50612ca01","type":"BasicTicker"}},"id":"a84092a4-8afd-45c1-82df-a3e06d9c2d91","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"c217aa6b-1899-4e88-9831-856c2a1a41af","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"cc9b46c8-ae5c-4f33-808e-48be52be568c","type":"DataRange1d"},{"attributes":{"data_source":{"id":"c217aa6b-1899-4e88-9831-856c2a1a41af","type":"ColumnDataSource"},"glyph":{"id":"fa8d1356-6279-4335-a4c8-9fbaa7c6aadc","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5caaf6b3-1c51-4d85-881a-a18d02cf8fdb","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"59deb205-b5b9-4288-b9ff-50d0982f34c6","type":"Plot"},"ticker":{"id":"549a6ab0-65cf-4e2d-9f7d-bef50612ca01","type":"BasicTicker"}},"id":"efd0d85d-384c-4445-bc5b-45c953b177eb","type":"Grid"},{"attributes":{"callback":null},"id":"388782b5-87ee-4752-be43-2b6e9057238a","type":"DataRange1d"},{"attributes":{},"id":"c30880da-fbdd-4c17-ab5c-ef2b3692d6d0","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fa8d1356-6279-4335-a4c8-9fbaa7c6aadc","type":"SquareCross"},{"attributes":{},"id":"549a6ab0-65cf-4e2d-9f7d-bef50612ca01","type":"BasicTicker"},{"attributes":{"below":[{"id":"d95a5d1d-3e3b-4f4e-bbd9-c69fe878cd9f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"a84092a4-8afd-45c1-82df-a3e06d9c2d91","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"5caaf6b3-1c51-4d85-881a-a18d02cf8fdb","type":"GlyphRenderer"},{"id":"d95a5d1d-3e3b-4f4e-bbd9-c69fe878cd9f","type":"LinearAxis"},{"id":"a84092a4-8afd-45c1-82df-a3e06d9c2d91","type":"LinearAxis"},{"id":"49c4d29c-3074-4642-b0a4-3f25eb22f03c","type":"Grid"},{"id":"efd0d85d-384c-4445-bc5b-45c953b177eb","type":"Grid"}],"title":null,"tool_events":{"id":"169e4a47-eafa-4044-bb21-4287f9510e5b","type":"ToolEvents"},"toolbar_location":null,"x_range":{"id":"cc9b46c8-ae5c-4f33-808e-48be52be568c","type":"DataRange1d"},"y_range":{"id":"388782b5-87ee-4752-be43-2b6e9057238a","type":"DataRange1d"}},"id":"59deb205-b5b9-4288-b9ff-50d0982f34c6","type":"Plot"},{"attributes":{"formatter":{"id":"a646d225-9619-46cc-8d28-42feeafc8371","type":"BasicTickFormatter"},"plot":{"id":"59deb205-b5b9-4288-b9ff-50d0982f34c6","type":"Plot"},"ticker":{"id":"e8e8710a-40bb-4b9e-ad9e-dc2f3000bcf2","type":"BasicTicker"}},"id":"d95a5d1d-3e3b-4f4e-bbd9-c69fe878cd9f","type":"LinearAxis"},{"attributes":{},"id":"169e4a47-eafa-4044-bb21-4287f9510e5b","type":"ToolEvents"}],"root_ids":["59deb205-b5b9-4288-b9ff-50d0982f34c6"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"a5633322-f736-43bc-b4fa-23b0efccf62a","elementid":"267b8797-5a13-4022-bc91-7f73ac7705da","modelid":"59deb205-b5b9-4288-b9ff-50d0982f34c6"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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